# 5.4 UDP 的优点

（P216 5.2.1）UDP 协议的主要优点有：

+ **无连接**：UDP 协议是无连接的，即发送数据前不需要建立连接。这样**减少了开销和发送数据前的时延**。
+ **尽最大努力交付**：即不保证可靠交付。于是主机**不需要维持复杂的连接状态表**。
+ **面向报文**：UDP 对应用进程产生的报文，仅添加 UDP 协议的首部，既不拆分，也不合并，**保留这些报文的边界**，然后直接交付给网络层。
+ **没有拥塞控制**：出现网络拥塞时不会使得发送方的发送速率降低。因此 UDP 适合**实时性较高**且对数据完整性要求不高的应用。
+ **支持多点通信**：UDP 支持**一对一**、**一对多**、**多对一**、**多对多**的交互通信。
+ **首部开销小**：UDP 协议首部仅有 8 字节，相比 TCP 的 20 字节要短。

综上，UDP 适合少量数据、对传输可靠性不高或一对多、多对多数据传输。