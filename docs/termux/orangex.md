---
title: Orangex
---

# Orangex

## 介绍

Orangex 是使用 React 和 NodeJS 开发的基于 Termux 运行的 Web APP. 

## 如何运行 Orangex

执行 NPM 命令安装 Orangex:

``` sh
npm install orangex -g
```

运行 Orangex:

``` sh
orangex
```

## 执行安装脚本时发生了什么

我们执行安装脚本命令:

``` sh
sh -c "$(curl -fsSL https://blog.orangex4.cool/demo/orangex/install.sh)"
```

会自动从地址 `https://blog.orangex4.cool/demo/orangex/install.sh` 获取安装脚本然后执行.

安装脚本会执行以下操作:


### 开启存储权限

``` sh
termux-setup-storage
```

`~\storage` 即为挂载的文件夹.

![](https://p.pstatp.com/origin/ff9f00028f8562cce3d3)


### Termux 切换国内源并检查更新

``` sh
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/termux-packages-24 stable main@' $PREFIX/etc/apt/sources.list

sed -i 's@^\(deb.*games stable\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/game-packages-24 games stable@' $PREFIX/etc/apt/sources.list.d/game.list

sed -i 's@^\(deb.*science stable\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/science-packages-24 science stable@' $PREFIX/etc/apt/sources.list.d/science.list

yes | pkg update
```

### 安装必要软件

``` sh
pkg install vim wget git openssh ecj dx tree nodejs python clang zsh -y
```


### NPM 设置代理并安装 Orangex

``` sh
npm config set registry https://registry.npm.taobao.org

npm install -g orangex
```


### Pip 设置代理并安装必要库

``` sh
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
pip install requests
```


### 使用 Oh-My-Zsh 美化界面

``` sh
git clone https://gitee.com/geogra/termux-ohmyzsh.git "$HOME/termux-ohmyzsh" --depth=1

mv "$HOME/.termux" "$HOME/.termux.bak.$(date +%Y.%m.%d-%H:%M:%S)"
cp -R "$HOME/termux-ohmyzsh/.termux" "$HOME/.termux"

git clone https://gitee.com/mirrors/oh-my-zsh.git "$HOME/.oh-my-zsh" --depth=1
mv "$HOME/.zshrc" "$HOME/.zshrc.bak.$(date +%Y.%m.%d-%H:%M:%S)"
cp "$HOME/.oh-my-zsh/templates/zshrc.zsh-template" "$HOME/.zshrc"
sed -i '/^ZSH_THEME/d' "$HOME/.zshrc"
sed -i '1iZSH_THEME="agnoster"' "$HOME/.zshrc"
echo "alias chcolor='$HOME/.termux/colors.sh'" >> "$HOME/.zshrc"
echo "alias chfont='$HOME/.termux/fonts.sh'" >> "$HOME/.zshrc"

git clone https://gitee.com/home8132/zsh-syntax-highlighting.git "$HOME/.zsh-syntax-highlighting" --depth=1
echo "source $HOME/.zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> "$HOME/.zshrc"

chsh -s zsh

echo "oh-my-zsh install complete!\nChoose your color scheme now~"
echo -e "\n" | $HOME/.termux/colors.sh

echo "Choose your font now~"
echo -e "\n" | $HOME/.termux/fonts.sh
```


### 设置 Orangex 后台自启动

``` sh
echo "nohup orangex &" >> "$HOME/.zshrc"
```


### 优化 Termux 界面与开屏文本

``` sh
echo "extra-keys = [['ESC','BACKSLASH','|','/','_','>','\`','UP','QUOTE','APOSTROPHE'],['TAB','CTRL','ALT','~','-','&','LEFT','DOWN','RIGHT','$']]" >> "$HOME/.termux/termux.properties"

curl -fsSL https://blog.orangex4.cool/demo/orangex/welcome.txt > "$PREFIX/etc/motd"
```

### 下载 CodeExamples

``` sh
git clone https://github.com/OrangeX4/CodeExamples.git --depth=1
```


### 输出完成提示

``` sh
echo " ------------------------"
echo "|        Complete        |"
echo "| Please restart Termux. |"
echo " ------------------------"
echo "|          完成          |"
echo "|     请重启 Termux      |"
echo "|  界面发生改变即为成功   |"
echo " ------------------------"
```

## 临时关闭 Orangex 后台服务

使用命令 `kill <PID>`, 其中 `PID` 是它显示的数字.

![](https://p.pstatp.com/origin/1384e0004986b284d02b6)


## 永久关闭 Orangex 后台自启动

将 `~/.zshrc` 文件中的 `nohup orangex &` 给注释或删除掉.

![](https://p.pstatp.com/origin/fffe0001fc42a70e1b42)

![](https://p.pstatp.com/origin/138350003578118aaafdf)

## Orangex 用户反馈群

![](https://p.pstatp.com/origin/febd00021b05d364ce50)