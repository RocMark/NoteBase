# git stash  
> 4-8 待 review

# 切回至 過去Commit節點 或 是切換 Branch
git stash save 
1. 儲存 folder檔案與最新 repo版本的差異
//* 切回來時，才能回到執行git stash前的狀態

2. 把folder中，檔案還原成 repo中新的版本
3. git stash list 取得 Commit ID

# 回到 git stash 前狀態
1. git checkout commitID (由git stash list取得)

2. git stash pop
2. git stash apply
> 效果相同
//? 取出暫存檔並合併至當前檔案