# 3.20 划分 VLAN 的方法

## 3.20.1 基于端口的划分

即根据交换机的端口将设备分配到不同的 VLAN，每个端口被分配到一个或多个 VLAN。这也是最常见的 VLAN 划分方法。

相关词条：

+ **PVID（Port of VLAN ID）**

  每个端口都需设置一个 PVID，当一个端口收到一个没有 VLAN 标签的帧时，VLAN 交换机会将这些帧的 VLAN 标签设置为此端口设置的 PVID。

+ **Tagged 端口**

  Tagged 端口通常用于 **Trunk 端口**，即**汇聚链路所连接的两个端口**。这些端口连接到交换机、路由器等网络设备上。Tagged 端口传输的帧通常包含 VLAN 标签。每个 VLAN 单独设置 Tagged 端口。

+ **Untagged 端口**

  Untagged 端口通常用于**访问端口（Access Port）**，这些端口连接到最终用户设备。这些设备发送的帧通常不包含 VLAN 标签。每个 VLAN 单独设置 Untagged 端口。

+ **非成员端口（Non-Member Port）**

  指一个端口不属于特定的 VLAN。每个 VLAN 单独设置非成员端口。

简单来说，将两台 VLAN 交换机所连接起来的端口（即 **Trunk 端口**）设置为 **Tagged 端口**，两台交换机按需求分别将自身的端口分配给不同的 VLAN，再根据 VLAN 标签为每个端口设置 **PVID**，即可划分 VLAN。

具体的，假设现有两台 4 口的 VLAN 交换机 A、B，记 $A_i$ 为交换机 A 的 $i$ 号端口。一般的，VLAN 交换机默认存在一个 VLAN 标签为 1 的 VLAN。现计划划分如下 VLAN：

+ 使用 $A_4$ 和 $B_4$ 作为 **Trunk 端口**。
+ 将 $A_1$、$A_2$、$B_1$ 划分为 VLAN 标签为 10 的 VLAN。
+ 将 $A_3$、$B_2$、$B_3$ 划分为 VLAN 标签为 20 的 VLAN。

我们需要进行如下设置：

+ 使用网线将 $A_4$ 和 $B_4$ 连接起来。

+ 在交换机 A 上创建 VLAN 标签为 10 的 VLAN，设置 $A_1$、$A_2$ 为 Untagged 端口，$A_4$ 为 Tagged 端口，$A_3$ 为非成员端口。

  | 端口（交换机 A） | Untagged 端口 | Tagged 端口 | 非成员端口 |
    |-----------|-------------|-----------|-------|
  | 端口 1      | ✓           |           |       |
  | 端口 2      | ✓           |           |       |
  | 端口 3      |             |           | ✓     |
  | 端口 4      |             | ✓         |       |

+ 在交换机 B 上创建 VLAN 标签为 10 的 VLAN，设置 $B_1$ 为 Untagged 端口，$B_4$ 为 Tagged 端口，$B_2$、$B_3$ 为非成员端口。

  | 端口（交换机 B） | Untagged 端口 | Tagged 端口 | 非成员端口 |
    |-----------|-------------|-----------|-------|
  | 端口 1      | ✓           |           |       |
  | 端口 2      |             |           | ✓     |
  | 端口 3      |             |           | ✓     |
  | 端口 4      |             | ✓         |       |

+ 在交换机 A 上创建 VLAN 标签为 20 的 VLAN，设置 $A_3$ 为 Untagged 端口，$A_4$ 为 Tagged 端口，$A_1$、$A_2$ 为非成员端口。

  | 端口（交换机 A） | Untagged 端口 | Tagged 端口 | 非成员端口 |
    |-----------|-------------|-----------|-------|
  | 端口 1      |             |           | ✓     |
  | 端口 2      |             |           | ✓     |
  | 端口 3      | ✓           |           |       |
  | 端口 4      |             | ✓         |       |

+ 在交换机 B 上创建 VLAN 标签为 20 的 VLAN，设置 $B_2$、$B_3$ 为 Untagged 端口，$B_4$ 为 Tagged 端口，$B_1$ 为非成员端口。

  | 端口（交换机 B） | Untagged 端口 | Tagged 端口 | 非成员端口 |
    |-----------|-------------|-----------|-------|
  | 端口 1      |             |           | ✓     |
  | 端口 2      | ✓           |           |       |
  | 端口 3      | ✓           |           |       |
  | 端口 4      |             | ✓         |       |

+ 在交换机 A 上设置 PVID。

  | 端口（交换机 A） | PVID  |
    |-----------|-------|
  | 端口 1      | 10    |
  | 端口 2      | 10    |
  | 端口 3      | 20    |
  | 端口 4      | 1（默认） |

+ 在交换机 B 上设置 PVID。

  | 端口（交换机 B） | PVID  |
    |-----------|-------|
  | 端口 1      | 10    |
  | 端口 2      | 20    |
  | 端口 3      | 20    |
  | 端口 4      | 1（默认） |

此时我们便完成了 VLAN 划分，若我们将路由器 $R_a$ 接入 $A_1$ 口，则接入 $A_2$、$B_1$ 端口的设备可通过 $R_a$ 上网；同样的若路由器 $R_b$ 接入 $A_3$ 口则接入 $B_1$、$B_2$ 端口的设备可通过 $R_b$ 上网。且由于 VLAN 拥有隔离功能，接入 $A_2$、$B_1$ 端口的设备无法访问 $R_b$，即无法通过 $R_b$ 上网。

## 3.20.2 其他 VLAN 划分方式

+ **基于 MAC 地址的 VLAN 划分**

  根据设备的 MAC 地址将流量分配到不同的 VLAN。可设置根据 MAC 地址前缀或完整 MAC 地址将数据包划分到相应的 VLAN。

+ **基于协议的 VLAN 划分**

  根据数据包中使用的协议类型将流量分配到不同 VLAN。例如可以将 IPv4 和 IPv6 的流量划分到不同 VLAN。

+ **基于子网的 VLAN 划分**

  根据 IP 地址子网将设备分配到不同的 VLAN。通常一个 VLAN 对应一个 IP 子网。

+ **基于策略的 VLAN 划分**

  根据网络策略或安全要求进行 VLAN 划分。