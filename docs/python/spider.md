---
title: 爬虫
---

# 爬虫

## 介绍

**网络爬虫(web crawler)**, 以前被为**网络蜘蛛(spider)**, 是按照一定的规则自动浏览网页并获取信息的机器人程序(或脚本), 被广泛的应用于互联网搜索引擎.

狭义的爬虫只会爬取数据, 不会对网站施加额外的影响. 广义的爬虫还可以帮你对网站进行更多的操作, 例如发布评论, 提交数据和打卡等.

利用爬虫你可以:

1. 爬取当当网上的五星好评书籍, 便捷地收集相关的数据.
2. 爬取微博的关注数, 微博内容, 甚至能帮你自动发布微博, <del>进行水军互喷</del>.
3. 很多每日打卡可以通过爬虫进行, 如 Bilibili 进行每日签到领硬币.


## 第一个爬虫程序

我们来看第一个爬虫程序: 爬取当当网上的五星好评书籍.

[代码参考](https://mp.weixin.qq.com/s/ET9HP2n3905PxBy4ZLmZNw)

`CodeExamples` 文件夹内置了一个 `spider.py` 文件. 可以运行这个文件, 爬取当当网上的五星好评书籍.


::: tip 第一步
用 Orangex 打开 `spider.py` 文件.
:::

![](https://p.pstatp.com/origin/fe900003bf6498381b38)


::: tip 第二步
运行 `spider.py`, 稍等片刻, 就能看见输出.
:::

![](https://p.pstatp.com/origin/137d40002d403b4a32bdb)


::: tip 第三步
切换到文件管理器, 你会看见 `book.txt` 文件, 即你爬取下来的书籍数据.
:::

![](https://p.pstatp.com/origin/1386200027080e5dbda67)


::: tip 第四步
打开 `book.txt` 文件, 你会看见你爬取到的书籍数据.  
恭喜你, 第一个爬虫运行成功了!
:::

![](https://p.pstatp.com/origin/139100000408937e97fdc)


## 进一步学习爬虫

### [WistBean 的爬虫教程](https://github.com/wistbean/learn_python3_spider)

### [如何入门 Python 爬虫 - 知乎](https://www.zhihu.com/question/20899988)

### [AndroidHttpCapture - 手机端抓包工具](https://github.com/JZ-Darkal/AndroidHttpCapture)