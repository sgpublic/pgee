# 1.2 数组

定义一个数组需要事先确定好类型和容量，数组一旦定义完成后，其容量不可改变。示例：

```c
int array_a[10]; // 定义类型为 int、容量为 10 的数组
```

上述数组在定义完成后，每个元素将自动赋值该变量类型的默认值。例如 `int`类型的默认值是 `0`，`bool` 类型的默认值是 `false`。

也可以在定义数组的同时对其进行赋值，例如：

```c
int array_a[10] = {1, 2, 3, 4}; // 定义类型为 int、容量为 10 的数组，并赋值前 4 个元素
```

若定义数组的同时进行了赋值，则可不对数组的容量进行定义，即使用赋值的数量作为容量，例如：

```c
int array_a[] = {1, 2, 3, 4}; // 定义类型为 int 的数组，并赋值了 4 个元素，于是该数组容量为 4
```

<details>
<summary>相关代码</summary>

```c
#include <stdio.h>

int main() {
    int array_a[10]; // 定义类型为 int、容量为 10 的数组
    printf("array_a 的容量为：%lu\n", sizeof(array_a) / sizeof(array_a[0]));

    int size = 114;
    int array_b[size]; // 定义类型为 int、容量大小等于变量 size 的数组
    printf("array_b 的容量为：%lu\n", sizeof(array_b) / sizeof(array_b[0]));
    size = 514;
    printf("更改了变量 size 的值后，array_b 的容量为：%lu\n", sizeof(array_b) / sizeof(array_b[0])); // 数组一旦定义完成，其容量不可改变

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
array_a 的容量为：10
array_b 的容量为：114
更改了变量 size 的值后，array_b 的容量为：114

Process finished with exit code 0
```
</details>

## 1.2.1 数组的引用

直接看例子：

```c
int arr[3] = { 1, 2, 3 };
printf("数组的第三元素为：%d", arr[2]);
```

需要注意的是，C 语言没有自动的边界检查，当访问了数组索引范围以外的值时，可能产生不可预测的行为：

```c
#include <stdio.h>

int main() {
    int arr[5] = { 1, 2, 3, 4, 5 };
    printf("数组第六个元素为：%d\n", arr[5]);
    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
数组第六个元素为：32759

Process finished with exit code 0
```