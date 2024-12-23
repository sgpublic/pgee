# 9.3 标记交换原理（P190 4.9.1）

**多协议标签交换 MPLS（MultiProtocol Label Switching）** 不是一种单一的协议，而是一种网络技术或框架。

相关词条：

+ **标签交换路由器 LSR（Label Switching Router）**：MPLS 需要路由器硬件支持，支持 MPLS 的路由器称为 LSR。
+ **MPLS 域**：由标签交换路由器组成的网络称为 MPLS 域。
+ **标签边缘路由器 LER（Label Edge Router）**：即 MPLS 域边缘的路由器，IP 数据报通过标签边缘路由器进入和离开 MPLS 域。
+ **标签分配协议 LDP（Label Distribution Protocol）**：用于在 MPLS 域中分配和管理标签。
+ **入标签（Incoming Label）**：即标签交换路由器收到数据报时其携带的标签。
+ **出标签（Outgoing Label）**：标签交换路由器转发数据报前，用于替换数据报中标签的标签，也是由标签边缘路由器分配给自己的标签。

当一个 IP 数据报需要穿过 MPLS 域时：

1. 数据报通过标签边缘路由器进入 MPLS 域，标签边缘路由器会直接计算出穿过 MPLS 域的完整路径，并通过标签分配协议为沿途的所有标签交换路由器分配标签，告知其如何根据收到的标签转发数据报，即入标签和出标签的映射关系。
2. 将数据报封装为以太网 MAC 帧前，在 IP 数据报前面插入 MPLS 首部。
3. 路径中标签交换路由器根据分配到的标签以及标签映射关系，直接在数据链路层使用**硬件转发**，称为**标签转发**，也就是说，**标签转发不再上升到网络层查找路由表，而是直接在数据链路层完成转发**。
4. 数据报通过标签边缘路由器离开 MPLS 域，标签边缘路由器会去除 MPLS 首部，并将其转发到目的网络中。