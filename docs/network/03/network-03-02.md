# 3.2 常见的组帧的方法

## 3.2.1 封装成帧（P74 3.1.2）

**封装成帧（Framing）** 就是在一段数据的前后分别加上首部和尾部，其作用是进行**帧定界**，即标记**帧（Frame）** 的开始和结束，并附带必要的控制信息。

相关词条：

+ **最大传输单元 MTU（Maximum Transfer Unit）**

  即每一种链路层协议都有规定的，其所能传送的帧的**数据部分长度上限**。

## 3.2.2 透明传输（P75 3.1.2）

**透明传输（Transparent Transmission）** 是指数据在传输过程中，信号的内容、格式和结构保持不变，不受传输截止或传输设备的影响。

也就是说从对方网络层产生的 IP 数据报，交给对方的数据链路层封装成帧，传输到我方的数据链路层后再从中提取出 IP 数据包，上交给我方网络层，对于双方的网络层来讲，数据传输的内容没有发生任何改变，看起来就像数据链路层不曾存在，是对方网络层直接将数据交给我方网络层一样。

帧开始和结束的标记使用专门指明的控制字符：

+ **控制字符 $SOH$（Start Of Header）** 放在一帧的最前面，其编码为 $\mathtt{0x01}$。
+ **控制字符 $EOT$（End Of Header）** 放在一帧的最后面，其编码为 $\mathtt{0x04}$。

由于数据帧携带的数据里可能包含这两个字符，因此为了防止错误识别为帧的开始和结束，数据链路层在封装成帧的时候，若数据部分包含这两个字符，则在该字符前面加上**转义字符 $ESC$（Escape）**，其编码为 $\mathtt{0x1B}$，若数据部分包含转义字符，则在该字符前再加上转义字符。

其他组帧方式：

+ PPP 帧

  （P80 3.2.2）PPP 帧使用字符 $\mathtt{0x7E}$（即二进制 $01111110$）标记帧的开始和结束。

  PPP 帧使用**两种填充方式**实现透明传输：

    + **字节填充**（P81 3.2.2）

      当 PPP 使用**异步传输**时，使用字符 $\mathtt{0x7D}$ 作为转义字符，（[RFC 1662 4.2](https://datatracker.ietf.org/doc/html/rfc1662#section-4.2)）填充方法如下：

        1. 把信息部分中每个 $\mathtt{0x7E}$ 字节转变为 2 字节序列 $\mathtt{0x7D},\mathtt{0x5E}$。

        2. 若信息部分中出现一个 $\mathtt{0x7D}$，则转变为 2 字节序列 $\mathtt{0x7D},\mathtt{0x5D}$。

        3. 若信息部分中出现了 ASCII 码的控制字符，则将其转换为 2 字节序列 $\mathtt{0x7D},\mathtt{\text{控制字符}+0x20}$。

           例如：若出现 $\mathtt{0x03}$（代表“传输结束”的字符 ETX），则转变为 2 字节序列 $\mathtt{0x7D},\mathtt{0x23}$。

    + **零比特填充**（P81 3.2.2）

      当 PPP 使用**同步传输**时，若数据部分中出现连续的 5 个 1，则立即填入一个 0。 