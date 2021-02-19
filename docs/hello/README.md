---
title: Hello World
---

# Hello World

## 说明

Orangex 内置了一个 `CodeExamples` 文件夹, 里面内置了许多语言的 `Hello World` 模板, 即编程惯例中初学者的第一个程序.

这一章将教会你在手机中用 Orangex 编程的最基本的操作.

## 步骤

::: tip 第一步
向下移动, 找到 `CodeExamples` 文件夹, 点击它.
:::

![](https://p.pstatp.com/origin/1382300027fbc2bbf2647)


::: tip 第二步
向下移动, 找到 `HelloWorld.py` 文件夹, 点击它.
:::

![](https://p.pstatp.com/origin/ffd100035d618aa4c37a)


::: tip 第三步
你会被自动定向到编辑页面, 这个页面显示的是该代码文件的内容.  
接下来, 点击下方的 `Terminal` 选项卡.
:::

![](https://p.pstatp.com/origin/138450001d52bb2b7662d)


::: tip 第四步
你会被自动定向到终端页面, 这个页面显示的是对终端的快捷操作.  
点击第一个 `Run` 按钮.
:::

![](https://p.pstatp.com/origin/1382b0002bb2d87a1ebe6)


::: tip 第五步
不出意外, 你将会看见:

```
out:
Hello, World!
```

恭喜你, 运行成功了!
:::

![](https://p.pstatp.com/origin/1389a0001253a2a1b9f98)


## 编辑

::: tip 说明
编程是创造新事物的过程, 仅仅运行现有的代码还不能称之为编程.

接下来, 我们要做的是修改现有的代码, 让它显示出 `Hello, Orangex`.

(或着你也可以输出你自己的名字)
:::


::: tip 第一步
在上文 `Hello, World!` 的基础上, 点击下方的编辑选项卡.
:::

![](https://p.pstatp.com/origin/138cc00008e540a45821e)


::: tip 第二步
看见 `print('Hello, World!')`, 这就是我们要修改的代码.
:::

![](https://p.pstatp.com/origin/1374e0001dfdee091c337)


::: tip 第三步
将 `World` 替换成 `Orangex`, 如图,  

即将 
``` python
print('Hello, World!')
```
替换成了 
``` python
print('Hello, Orangex!')
```
:::

::: warning
**这一步很重要, 要输出的文本必须放在单引号之间!**  
**这一步很重要, 要输出的文本必须放在单引号之间!**  
**这一步很重要, 要输出的文本必须放在单引号之间!**  
:::

![](https://p.pstatp.com/origin/1381000020b7bb0d5225d)


::: tip 第四步
点击 `Save` 按钮, 对文件进行保存, 弹出提示即为保存成功.
:::

![](https://p.pstatp.com/origin/137fa0001f2fa04bcfb2d)


::: tip 第五步
切换到 `Terminal` 选项卡, 点击 `Run` 按钮, 看见如下输出即为成功.

恭喜, 你编写了第一个程序!
```
Out:
Hello, Orangex!
```
:::

![](https://p.pstatp.com/origin/1374c0003a8d9bd0e42ff)


## Orangex 使用说明

### 总述

::: warning
**使用 `Orangex` APP 前要先打开 `Termux` APP, 且要保持 `Termux` 在后台!**  
**使用 `Orangex` APP 前要先打开 `Termux` APP, 且要保持 `Termux` 在后台!**  
**使用 `Orangex` APP 前要先打开 `Termux` APP, 且要保持 `Termux` 在后台!**  
:::

Orangex 一共分为三个界面:

1. 文件管理
2. 代码编辑
3. 终端运行

Linux 系统以文件为中心, 一切代码都保存在文件中. 我们以文本形式编写出代码, 保存到文件中, 再通过其他程序对这个编译或解释运行.

Orangex 为你提供了一个移动端适配的, 现代化风格的文件管理器, 可以让你很方便地管理文件; Orangex 的代码编辑器对大部分主流编程语言都有稳定的高亮, 并且支持打开较大的文本文件; Orangex 提供了便捷的终端运行界面, 支持进行常用命令配置, 运行代码仅需简单的点击!

### 文件管理

::: tip
**点击 `..` 文件夹可以返回上一级文件夹.**  
**点击 `.` 文件夹可以刷新当前文件夹.**  
:::

![](https://p.pstatp.com/origin/137250002e3a8bcdc3e6d)


::: tip
**长按可以选中文件, 然后可以进行复制, 移动, 删除和重命名操作.**  
**对多个文件长按可以多选.**  
:::

![](https://p.pstatp.com/origin/1380800013e890661eb64)

![](https://p.pstatp.com/origin/1001100023ef285214531)


### 代码编辑

::: tip
**Orangex 内置了常用特殊字符键盘, 让你免受频繁切换键盘的麻烦!**  
**Orangex 内置了常用特殊字符键盘, 让你免受频繁切换键盘的麻烦!**  
**Orangex 内置了常用特殊字符键盘, 让你免受频繁切换键盘的麻烦!**  
:::

![](https://p.pstatp.com/origin/137a80002b4f4eb2735b0)


::: tip
**代码编辑窗口上方分别是 `复制`, `撤销`, `反撤销`, `保存`功能.**

**复制可以将整个文件的内容进行复制.**

**撤销可以撤销你上一步的操作, 即可以`反悔`.**

**反撤销可以撤销你上一次的撤销, 即可以`反悔`之前的`反悔`.**

**保存可以保存你对文件的修改, 若不保存, 你所做的修改会丢失!**
:::

![](https://p.pstatp.com/origin/1381600044659cca13f3c)


### 终端运行

::: tip
**终端运行窗口可以方便你快速执行常用命令, 例如 python 文件的执行.**
:::

::: danger
**Orangex 的终端运行暂时不支持输入, 不能使用形如 `input` 或 `scanf` 的函数!**  
**Orangex 的终端运行暂时不支持输入, 不能使用形如 `input` 或 `scanf` 的函数!**  
**Orangex 的终端运行暂时不支持输入, 不能使用形如 `input` 或 `scanf` 的函数!**  
:::

使用终端运行命令, 首先要掌握两个概念 `Default` 和 `Current`:

#### Default

Default 指的是全局的配置文件, 你可以在 `home` 目录下的 `.orangex` 找到它.

`~/.orangex/default.json` 文件保存了全局的配置文件, 你可以观察文件的内部结构.

![](https://p.pstatp.com/origin/1385d000205a7b7883448)

![](https://p.pstatp.com/origin/137240002dd14d0dadd6b)

![](https://p.pstatp.com/origin/1376800023f0897ce5bc6)


#### Current

若一个文件夹下还有子文件夹 `.orangex` 和文件 `.orangex/current.json` 文件, 那么就是一个 `Current`.

文件格式与 `Default` 相同.

![](https://p.pstatp.com/origin/137e900020377098949d3)

![](https://p.pstatp.com/origin/138990001a41970c6c078)


#### File

除此之外, 还需要了解 `File` 的含义.

Orangex 通过识别文件的后缀名来为不同语言提供动态的执行命令.

例如 `.py` 对应的 Python 文件和 `.js` 对应的 JavaScript 文件就有不同的执行命令, 他们可以执行的命令不应该显示在同一个界面里.

当你当前编辑的文件的后缀是 `.py` 时, 会自动切换到 Python 的运行命令. 切换其他语言同理, 你可以尝试运行不同语言的 `HelloWorld` 文件看看效果.

#### 文本替换

Orangex 执行命令的原理是执行 shell 脚本.

但在执行之前会进行一次文本替换.

以 `/data/data/com.termux/files/home/CodeExamples/HelloWorld.py` 作为当前代码编辑器打开的文件, 替换文本表格如下:

| 替换前         | 替换后 |
| -------------- | ------ |
| ${file} | /data/data/com.termux/files/home/CodeExamples/HelloWorld.py |
| ${fileDirname} | /data/data/com.termux/files/home/CodeExamples/ |
| ${fileBasename} | HelloWorld.py |
| ${fileBasenameNoExtension} | HelloWorld |
| ${fileExtname} | .py |

如你所见, 大体上遵循 VSCode 的模板.


## [下一章 > 进阶路线](/further/)