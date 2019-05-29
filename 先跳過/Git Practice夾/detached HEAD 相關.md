# detached HEAD 相關
提示你目前操作對象，不屬於任何分支

(可用 git checkout 分支名回分支)

# 讓 folder回指定 commit版本
git checkout commitID . 
git checkout commitID

差別在於
有加 .  => 不改變 HEAD狀態

無加 .  => 將目前分支的 HEAD指向該節點 (就會形成detached HEAD狀態)

# 無加. 執行 add / commit 
會產生一個無名分支，不會顯示在 git log 中
> 可作操作

1. 直接刪除該分支 (從repo刪除,repo回原狀)
2. 將此分支合併至原分支

# 合併該分支
1. git branch 無名分支名 (給與該無名分支一個名字)
2. git checkout master
3. git merge 無名分支名
4. git branch -D 無名分支 

# 刪除
1. git branch 無名分支名 (給與該無名分支一個名字)
2. git checkout master
3. git branch -D 無名分支

