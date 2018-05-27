# git config

# git config -l 
> 可以查看有哪些可以參數設置
git config --global user.name 'RocMark'
git config --global user.email 

# 重新設置某參數 --unset

# git config 檔案優先級 (由高到低)
1. .git中的 config 
(--local)

2. 登入帳號的Home Directory裡頭的 .gitconfig
(--global)

3. git 安裝檔中的 git config
(--system)

> 較低者，只有較高者未設置才會生效


# 自定義 指令別名 2-5
> 有用再查
git config alias 
