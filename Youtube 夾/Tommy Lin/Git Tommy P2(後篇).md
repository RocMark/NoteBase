# Git Tommy P2 Git 

# git config
> Git 規定所有 commit 必須要有使用者 & 信箱
git config user.email "email~"
git config user.name "Mark"

# git config 層級
system 最上 > global > local 
* 下層權重最大，下沒有就往上找
git config --global (全域)
git config --list --system/--local/--global (查詢當前生效的設定)

# 基礎 git 教學
git status
git add . 
* git add *.html index.js 
所有html檔、多檔案用空白串接
* 取消 staging
git reset index.js

* git add -u
與 git add . 的差異於
. 會將未追蹤的也加入暫存區，
-u 只會加入有追蹤的(有commit過的檔案)

git commit -m "~"

* git commit -am "~"
-am 可以跳過 git add 的動作
直接幫你加入暫存並作 commit (前提是檔案有被追蹤過)

* git commit --amend -m "~"  
> 不加 -m 會開啟編輯器
修改最後一次 commit 的訊息 & 內容

* 