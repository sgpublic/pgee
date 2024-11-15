# 4.14 路由器的优缺点

通常的，路由器不会转发**本地回环地址**（例如 127.0.0.1）、**本地网络地址**（例如形如 192.168.x.x 的仅在当前网络中有效的地址）、**广播包**（例如 255.255.255.255）。

优点：

1. **网络连接**：路由器可以连接多个网络，支持不同的网络协议，并根据 IP 地址进行智能数据转发，隔离了冲突域。
2. **安全性**：路由器能提供防火墙、网络地址转换 NAT 等安全功能。
3. **流量管理**：路由器能提供 QoS 等功能，优化网络性能。

缺点：

1. **成本**：高性能的路由器往往价格高昂。
2. **配置复杂**：路由器的设置和管理需要一定的技术知识。
3. **延迟**：存储转发技术会引入延迟。

## 4.14.1 地址解析协议 ARP（P133 4.2.4）

**地址解析协议 ARP（Address Resolve Protocol）** 用于在局域网中将 IPv4 地址解析为 MAC 地址。

当局域网中一台主机需要获取另一个 IPv4 地址的主机的 MAC 地址时：

+ 该主机广播 ARP 请求，即将请求数据包 MAC 帧目的地址置为 `FF:FF:FF:FF:FF:FF`，意图为“请问哪一台主机的 IPv4 地址是 xxx.xxx.xxx.xxx，请告诉我你的 MAC 地址”。
+ 当网络内 IPv4 地址匹配的主机收到 ARP 请求后，则直接向源 MAC 地址发送 ARP 响应。

注意：

+ 路由器不转发 ARP 协议数据包。
+ 交换机会将 ARP 请求发送给所有端口，但仅将 ARP 响应发送给对应端口。

## 4.14.2 默认网关（Gateway）

当设备接入网络时，除了要获取或设置 IP 地址及子网掩码，通常还需要获取或设置默认网关地址，当与目的 IP 地址不在同一个网络中时，则将数据报转发给默认网关。

当主机需要发送一个 IP 数据报时，首先使用子网掩码计算目的 IP 是否在同一个网络：若在同一个网络，则使用 ARP 直接解析目的 IP 地址的 MAC 地址；若不在同一个网络，则使用 ARP 解析默认网关的 MAC 地址。最后向解析结果的 MAC 地址发送数据报。


## 4.14.3 网络地址转换 NAT（P185 4.8.1）

由于 IPv4 地址的枯竭，为了缓解这种情况，**网络地址转换 NAT（Network Address Translators）** 技术出现了。

由于一个网络中的用户其实并不会同时使用大量与外部建立连接，绝大多数应用和服务仅使用有限数量的端口，因此 NAT 实现了网络内多个设备使用同一个公网 IP 与外部建立连接，并使用不同端口来区分不同连接。

NAT 会跟踪每一个会话，当网络中的应用发送数据到外部网络时，NAT 会修改数据报中的源 IP 地址为公网 IP 地址，修改源端口号，并记录下修改前和修改后对映射关系。

例如，一个网络内有 100 个设备，使用了 100 个内网 IP，每个设备仅使用 20 个端口与外部建立连接，而 NAT 可以实现使这 100 个设备公用一个公网 IP，使用 2000 个端口（即 $100 \times 20$）与外部建立连接，这样极大的节约了 IP 的使用。

相关词条：

+ （P186 4.8.1）**专用地址（Private Address）**

  又称**内网地址**，指只能用于内部通信的地址，**目的地址为专用地址的数据报路由器不得转发**。

  IPv4 私有地址块有三个：

   + 10.0.0.0/8
   + 172.16.0.0/12
   + 192.168.0.0/16

  IPv6 没有专用地址的概念。
+ **NAT 穿越**

  **NAT 穿越（NAT Traversal）** 俗称 NAT 打洞，常见的 NAT 穿越协议包括 **STUN（Session Traversal Utilities for NAT）** 和 **TURN（Traversal Using Relays around NAT）** 等。

  根据 NAT 原理，如果两个用户通过 NAT 连接网络，那么其本地获取到的 IP 实际上不能被另一个用户直接访问，NAT 穿越可以协助这两个用户在 NAT 网络内寻找到一条可以互相连接的路径。