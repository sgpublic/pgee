# 4.7 IP 数据报的结构及其每个域的意义（P136 4.2.5）

本节中“IP 地址”均指**IPv4 地址**。

（[RFC-791 3.1](https://datatracker.ietf.org/doc/html/rfc791#section-3.1)）IP 数据报格式如下所示：

```
    0                   1                   2                   3
    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |Version|  IHL  |Type of Service|          Total Length         |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |         Identification        |Flags|      Fragment Offset    |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |  Time to Live |    Protocol   |         Header Checksum       |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                       Source Address                          |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                    Destination Address                        |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                    Options                    |    Padding    |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

其中：

+ **版本（Version）**：占 4 位，指 IP 协议的版本。若 IPv4 即为 6，IPv6 即为 6。

+ **首部长度（IHL）**：占 4 位，指 IP 数据报的首部长度，**单位为 4 字节**。最大值为 15，即 60 字节。一般 IPv4 首部仅有固定部分的 20 字节。

+ **服务类型（Type of Service）**：指明期望获得哪种类型的服务。一般情况下不使用。**IP 数据报通过此字段区分优先级**。

+ **总长度（Total Length）**：指当前数据报总长度，即首部长度 + 数据部分长度，**单位为 1 字节**。当 IP 数据报需要分片时，此字段为当前分片的总长度。

+ **标识（Identification）**：是一个计数器，当 IP 数据报需要分片时，所有分片的数据报的标识字段一致，以区分不同的数据报。极端情况下确实无法避免出现**标识冲突**的情况，此时需要依赖上层协议引入新的机制（例如 TCP 的序列号机制）进一步**降低**冲突的可能性。

+ **标志（Flags）**：占 3 位。最高位无意义；中间位为 **DF（Don't Fragment）**，置为 1 时表示不允许分片；最低位为 **MF（More Fragment）**，置为 1 时表示后面还有分片，0 表示这是最后一个分片。

+ **片偏移（Fragment Offset）**：占 13 位。代表当前分片所携带的数据的第一个字节，在原始 IP 数据报中的相对位置，**单位为 8 字节**，因此当 IP 数据报需要分片时，每个分片（最后一个分片除外）所携带的数据长度必须为 8 个字节的倍数。

+ **生存时间 TTL（Time to Live）**：指数据报在网络中可通过的路由器数的最大值。路由器收到一个 IP 数据报后将 TTL 减去 1，若**减去 1 后** TTL 变为 0，则直接**丢弃该数据报**，并使用 ICMP 向源端发送**超时错误**。

+ **协议（Protocol）**：占 8 位，指出数据报所携带大数据使用的何种协议。

  | 协议名称   | 协议字段值（10 进制） | 协议字段值（16 进制） |
  |--------|--------------|--------------|
  | ICMP   | 1            | 0x01         |
  | IPv4   | 4            | 0x04         |
  | TCP    | 6            | 0x06         |
  | UDP    | 17           | 0x11         |
  | IPv6   | 41           | 0x29         |
  | ICMPv6 | 58           | 0x3a         |
  | OSPF   | 89           | 0x59         |
  | ...    |              |              |

+ **首部检验和（Header Checksum）**：对首部部分的检验和，不使用 CRC 校验，而采用**二进制反码求和算法**：

    1. 发送端**将检验和部分全置为 0**，然后将**首部每 16 位一分并求和**，求和结果**取反码**即为校验和。
    2. 接收方将**首部每 16 位一分并求和**，将结果**取反码**，若结果为 0，则表明数据传输没有出错，保留，否则丢弃。

+ **源地址（Source Address）**、**目的地址（Destination Address）**：各占 32 位，即 IPv4 地址。

+ **可选项（Options）**：1 ~ 40 字节不等。一般很少用。选项包含：**选项类型**、**选项长度**、**选项值**。

+ **填充（Padding）**：将所有可选项拼在一起后，若长度不为 4 字节的倍数，则填充至 4 字节的倍数。由于可选项中已包含选项长度，因此无需判断哪些是填充部分。

**IPv4 首部固定部分长度 20 字节**。