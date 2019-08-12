# git commit 相關指令

# 修改上一個 commit 記錄
* git commit --amend -m '新commit'

# git log 
git log --oneline (只顯示標題)
git shortlog (只顯示作者 & 標題)

# git log 進階搜尋
//* 搜尋 以A開頭的人 作的commit
git log --author = 'A' 

//? 時間搜尋 
> after=since before=until
git log --after = '2018-04-17 17:08'
git log --before = '2018-04-17 17:08'