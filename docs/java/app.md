---
title: APP
---

# APP

## 构建第一个 APP

Termux 的底层是 Android 系统, 自然可以开发 Android 系统的 APP.

该教程将会演示如何在 Termux 构建 APP.

::: tip 第一步
打开 Termux, 输入下列命令:

```bash
bash -c "$(curl -fsSL https://blog.orangex4.cool/demo/orangex/buildAPKs.bash)"
```
:::

![](https://p.pstatp.com/origin/138430003079b43f520d1)


::: tip 第二步
按下回车, 运行命令, 静待一两分钟.

若最后显示如同下图, 即为执行成功.
:::

![](https://p.pstatp.com/origin/fffa0002f6fdad913377)


::: tip 第三步
在手机的文件管理器中, 找到 `Download/buildAPKs/` 目录,  
该目录即为 apk 文件输出目录, 可以安装到手机中.
:::

![](https://p.pstatp.com/origin/1378b0001af2eafb16e40)

![](https://p.pstatp.com/origin/1389d0001d58a5380ac67)

![](https://p.pstatp.com/origin/1392400000f4114f0f7b9)

![](https://p.pstatp.com/origin/138d30000c45628b58c4c)


## 项目源码位置

项目源码位于 Termux 的 Home 目录中,  
详细位置是 `~/buildAPKs/sources/entertainment/`


## APP 开发学习

### [buildAPKs 项目](https://github.com/BuildAPKs/buildAPKs)

### [Android 教程 - 菜鸟教程](https://www.runoob.com/android/android-tutorial.html)