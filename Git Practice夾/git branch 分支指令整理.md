# git branch 分支指令整理

# 分支列表
git branch 
不加參數 (綠字為HEAD所在分支)

# 當分支切換時
git 會比較兩者 檔案 '清單' (並非內容) 是否一致

不一致: 缺的從repo取回，不需要的刪除

# 強制切換分支
git checkout 分支名 -f   (--force)

# 建立分支
//? 建立分支並切換
git checkout -b 分支名 
> 等同於 git branch 分支名 + git checkout 切換分支

# 從指定節點 產生 分支
git checkout -b 分支名 commitID

# 搜尋分支名
列出bug/開頭的分支
git branch --list bug/* 

//* 可使用 ST 的 Search去找 commit Msg

# 修改分支名
git branch -m 新分支名

# 刪除分支
git branch -d 要刪分支名

一般會先合併才刪除分支，若還未合併Git會有提示，
仍要強制刪除 改成 -D 即可