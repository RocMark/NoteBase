# Git Tommy P2 Git 
> https://www.youtube.com/watch?v=TF6mWcBCf2o

* git 原理 (1:25分 可review)
利用 檔案內容 去運算 SHA-1 去計算 HashID
當有 HashID 相同時會延用，不一樣才會新建

* git gc 垃圾回收

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

# HEAD
與最新的 commit 的狀態的比較
* master 預設分支

# 做 commit  會發生啥
HEAD & master 都會移動到新的 commit 上

* git cat-file -p HashID
可以查看該 commit 的 訊息
tree / parent(上一個commit 是誰) / 作者 / 時間 / 訊息

再次使用 git cat-file -p tree 的 HashID
可查看 commit 檔案修改

100644 blob 代表 一般檔案
040000 tree 代表 資料夾

可再用 git cat-file~ 在進入 該檔案

* 如果檔案內容相同， HashID 也會相同

# git show 查詢最後一次的異動 (有細節)
* git show CommitID 
查看 commit id 與上一版的差異
* git show CommitID  abc.txt
帶入檔案名稱，如果沒有差異會顯示空白 !
* git show CommitID:abc.txt
完整檔案內容