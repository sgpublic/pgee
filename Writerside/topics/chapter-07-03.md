# 7.3 秘密密钥加密算法：DES（明文位数，密钥位数，分组密码）

（P338 7.2.1）**数据加密标准 DES（Data Encryption Standard）** 是一种**对称密钥加密算法**。

DES 加密大致步骤是，先将明文分为每 64 位一组，然后对每组二进制数据进行加密处理，每组产生 64 位密文数据，最后将各组密文串接起来，即为最终密文。

DES 密钥为 64 位二进制，其中 56 位用于实际密文计算，8 位用于奇偶校验。

随着科技的发展，DES 安全性显著降低。（P339 7.2.1）即使采用穷举法（即将 $2^{56}$ 个密钥逐个进行计算）也能在 1s 内计算完毕，但破解 128 位密钥的 AES 算法需要大约 $10^{12}$ 年，且 AES 加密计算性能优于 DES，因此 DES 已逐渐被 AES 取代。

相关词条：

+ （P338 7.2.1）对称密钥密码体制

  又称**对称加密**，即使用对称加密的加密算法，**发送方和接收方使用同一个密钥加密和解密**，因此对密钥的分发和管理是一个挑战。
  
  对称加密通常比非对称加密计算速度更快。
  
  **DES 是一种经典的对称加密算法。**
+ （P338 7.1.3）无条件安全的密码体制

  如果不管截取者截取了多少密文，但在密文中都没有足够的信息来唯一的确定出对应的明文，则这一密码体制称为无条件安全的，或称为理论上不可坡的。
+ （P338 7.1.3）在计算机上安全的密码体制

  如果一个密码体制中的密码，不能在一定时间内使用计算机资源破译，则这一密码体质称为在计算机上是安全的。