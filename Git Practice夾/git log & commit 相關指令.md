# git commit 相關指令

# 修改上一個 commit 記錄
* git commit --amend -m '新commit'

# git log 只顯示title
git log --oneline 

# git log 
//? 查詢過往 commit 記錄
//* 指呈現 msg,不顯示其他, -2表上上次commit 
git log -2 --pretty=%B  

//? 快速查詢上一次commit msg
git show 

# git log 進階搜尋
//* 搜尋 以A開頭的人 作的commit
git log --author = 'A' 

//? 時間搜尋 
> after=since before=until
git log --after = '2018-04-17 17:08'
git log --before = '2018-04-17 17:08'

--stat
--numstat
--shortstat

# git shortlog  //* 精簡版
只顯示誰Commit者 & oneline Msg