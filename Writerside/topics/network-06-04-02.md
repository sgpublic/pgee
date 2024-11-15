# 6.4.2 MIME

**多用途互联网邮件扩展 MIME（Multipurpose Internet Mail Extensions）** 是一种扩展标准，它最初用于增强电子邮件协议，以支持多种类型的内容（如文本、图像、音频等），但它也被广泛应用于其他互联网协议中，如 HTTP。

## 6.4.2.1 电子邮件 E-Mail（P293 6.5.1）

电子邮件是互联网上最早的应用之一。

相关词条：

+ **用户代理 UA（User Agent）**

  指邮件服务的用户所使用的客户端。
+ （P296 6.5.2）**简单邮件传送协议 SMTP（Simple Mail Transfer Protocol）**

  SMTP 主要解决如何**发送邮件**的问题。SMTP 是电子邮件最重要的两个标准之一（另一个即是 MIME），在现代邮件服务中仍广泛使用。
+ （P298 6.5.4）**网际报文存取协议 IMAP（Internet Message Access Protocol）**

  IMAP 协议主要解决如何**接收邮件**的问题。现代邮件服务推荐使用 IMAP 接收邮件。

  IMAP 允许用户在多个设备上查看和管理邮件，例如删除、标记已读、移动到文件夹等，这些操作都会直接提现到服务器上，并**同步**给用户使用的其他客户端。

  IMAP 允许用户**仅读取邮件的部分内容**，而不是整个邮件。例如用户可以仅读取邮件的头部信息，然后决定是否读取完整内容；或者用户可以仅读取邮件的正文内容，而不读取邮件的图片和附件，以缩短邮件读取时间。
+ （P298 6.5.4）**邮局协议 POP3（Post Office Protocol V3）**

  POP 协议主要解决如何**接收邮件**的问题。尽管现代邮件服务通常都支持 POP3 协议，但已**不推荐使用**，原因如下：

    + **POP 协议会在用户下载完邮件后将已下载的邮件从服务器上删除。** 虽然 POP3 用户可以预先设置已下载邮件的邮件在服务器保存时间，但仍不适合需要长期在线访问和管理邮件的用户。
    + **POP3 对邮件的管理十分有限**。POP3 不支持标签、文件夹等更为复杂的管理。

具体的：

+ 当用户 A 使用服务器 A 提供的邮件服务向用户 B 发送邮件时，用户 A 的用户代理（即邮件客户端）使用 SMTP 协议与服务器建立连接，将一封邮件**从用户代理推送到服务器 A**。
+ 服务器 A 接收到邮件后，会将收到的邮件**暂存**，并检查邮件目的地址的域名部分：

   + 若域名就是**指向服务器 A** 自身，即用户 B 使用的邮件服务也是服务器 A 提供的，则不再进行进一步操作，**等待用户 B 读取**邮件。
   + 若域名**指向另一个服务器 B**，即用户 B 使用的邮件服务是服务器 B 提供的，则服务器 A 使用 SMTP 协议与服务器 B 建立连接，并将邮件**推送到服务器 B**。
+ 用户 B 在接收用户 A 发来的邮件时，用户 B 的用户代理与所使用的邮件服务器建立连接：

   + 若用户 B 使用 **POP3 协议**，则用户 B 会将邮件**从 POP3 服务器完整下载到本地**，POP3 服务器会在邮件成功下载后**将邮件删除**，或按照用户设置的保留时长，在**过期后删除**。
   + 若用户 B 使用 IMAP 协议，则可以在线读取邮件，IMAP 服务器**不会在用户读取邮件后将邮件删除**，用户 B 对邮件的所有操作都会提现在服务器上，当用户 B 使用另一个客户端时，此前的操作都能同步。

扩展：

+ 现代邮件客户端在连接服务器时通常不需要填写 SMTP、IMAP、POP3 等服务器的信息，是因为**邮件客户端通常内置了知名邮件服务的信息**，客户端会根据登陆所使用的邮件地址判断所属于哪个邮件服务，并自动对应其服务器信息。

## 6.4.2.2 MIME（P300 6.5.6）

MIME 扩展了 SMTP，而非取代了 SMTP，**当需要使用邮件传送非 ASCII 码内容时，MIME 用于定义其编码规则**。

HTTP 协议中包含“**类 MIME**”。

MIME 的首部包括：

+ **MIME-Version**：版本。

+ **Content-Description**：用人类可读的字符串标识内容主题的类型。

+ **Content-Id**：内容唯一标识。

+ **Content-Transfer-Encoding**：传输内容时所使用的编码。常见编码方式有：

    + **8bit**：当内容为字符串，且包含非 ASCII 字符时使用。

    + **Base64**：用于将任意二进制数据编码为 ASCII 码，方式如下：

        1. 将内容的二进制划分为**每 24 位一个单元**，最后一个单元不足 24 位时填充 0。

        2. 将每个单元划分为**每 6 位一组**，一共 4 组。

        3. 将上述分组每一组按照如下表格进行编码：

           | 码值 | 字符 | 码值 | 字符 | 码值 | 字符 | 码值 | 字符 |
           |:---|:---|:---|:---|:---|:---|:---|:---|
           | 0  | A  | 16 | Q  | 32 | g  | 48 | w  |
           | 1  | B  | 17 | R  | 33 | h  | 49 | x  |
           | 2  | C  | 18 | S  | 34 | i  | 50 | y  |
           | 3  | D  | 19 | T  | 35 | j  | 51 | z  |
           | 4  | E  | 20 | U  | 36 | k  | 52 | 0  |
           | 5  | F  | 21 | V  | 37 | l  | 53 | 1  |
           | 6  | G  | 22 | W  | 38 | m  | 54 | 2  |
           | 7  | H  | 23 | X  | 39 | n  | 55 | 3  |
           | 8  | I  | 24 | Y  | 40 | o  | 56 | 4  |
           | 9  | J  | 25 | Z  | 41 | p  | 57 | 5  |
           | 10 | K  | 26 | a  | 42 | q  | 58 | 6  |
           | 11 | L  | 27 | b  | 43 | r  | 59 | 7  |
           | 12 | M  | 28 | c  | 44 | s  | 60 | 8  |
           | 13 | N  | 29 | d  | 45 | t  | 61 | 9  |
           | 14 | O  | 30 | e  | 46 | u  | 62 | +  |
           | 15 | P  | 31 | f  | 47 | v  | 63 | /  |
        4. 由于数据长度的单位是字节，因此最后一个单元的原始数据若不满 24 位，则只能是 8 位或 16 位。

      当最后一个单元原始数据为 16 位时，则需要**填充 8 位 0**，此时 Base64 编码结果**用 1 个等号（即“=”）代替**。

      当最后一个单元原始数据为 8 位时，则需要**填充 16 位 0**，此时 Base64 编码结果**用 2 个等号（即“==”）代替**。

    + 7bit：当内容中仅包含 ASCII 码字符时使用，随着 UTF-8 编码的普及，现代邮件中更常用 8bit。

    + quoted-printable：当内容中仅包含少量非 ASCII 字符（例如汉字）时使用，现代邮件中已很少使用。

+ **Content-Type**：一个固定格式的字符串，标明内容的数据类型和子类型。格式为“内容类型/子类型”，具体描述如下表：

  | 内容类型        | 子类型举例                                             | 说明        |
  |-------------|---------------------------------------------------|-----------|
  | text*       | plain（普通文本）、html、xml、css                          | 文本        |
  | image       | gif、jpeg                                          | 图像        |
  | audio       | mp3                                               | 音频        |
  | video       | mp4、quicktime（mov 格式）、x-matrosk（mkv 格式）           | 视频        |
  | application | octet-stream（未指定类型的二进制数据）、pdf、javascript、zip      | 应用程序产生的数据 |
  | multipart*  | form-data（多用于 HTTP 表单提交）、mixed（多用于邮件中包含多重不同类型的数据） | 多种类型的组合   |

  若数据类型使用 text，通常需要额外制定一个参数 charset，用于表面文本编码，若不指定，对方接收时会按照对方的默认编码解析，可能会造成无法正确解码。

  若数据类型使用 multipart，则需要额外指定一个参数 boundary，用于分割不同的数据，boundary 可随意指定，但需保证不与数据内容重复。

具体的：

```http
MIME-Version: 1.0
From: sender@example.com
To: recipient@example.com
Subject: Example Multipart Mixed Email
Content-Type: multipart/mixed; boundary="boundary123"

--boundary123
Content-Type: text/plain; charset="ASCII"
Content-Transfer-Encoding: 7bit

This is a plain text part of the email.

--boundary123
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: 8bit

<html>
<body>
    <h1>这是邮件中的一个 HTML 部分。</h1>
    <p>哈喽！这是一个小小的邮件！</p>
</body>
</html>

--boundary123
Content-Type: text/plain; charset="UTF-8"
Content-Transfer-Encoding: 8bit

这是邮件的纯文本部分。

--boundary123
Content-Type: application/pdf
Content-Disposition: attachment; filename="example.pdf"
Content-Transfer-Encoding: base64

JVBERi0xLjQKJeLjz9MKNCAwIG9i... (base64 编码的 PDF 内容)

--boundary123--
```