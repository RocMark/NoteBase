# Git Practice
Git操作練習與筆記整理用 專案

# Git Flow 待學

# 常用指令
git config credential.helper store

# 待 Review
* git stash review
* git revert vs reset vs checkout 比較 
(待重新實作 review)
> 好文值得 review http://t.cn/RmnkIVO

# 待查詢
git diff P2 //! 待補
//? 3-7 補
git log 6-2 review&補
git remote相關 //? 待補 16-17 (筆記在書裡)
github 操作 //? 待補 18 (筆記在書裡)

//* 待查
git show 用法
ST Stage Hunk 怎操作

# Note
//! git checkout 前 
> 先 git status 檢查檔案 & 緩存任何更動 (避免檔案不一致7-7)

# 有需要在學 List
* git cherry-pick 待深入

# 進階操作
* 自訂標籤  git tag
* 自訂指令  git config alias 
* GitStats 統計數據 6-5
* GitLab (自建Github) 21
* GitServer 22-24

# 初始化步驟
* 先建立 README.md 檔案
* 執行下列
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/RocMark/Git-Practice.git
git push -u origin master

# git 指令整理
* git help -a 完整指令清單

# HEAD
HEAD^ 等同於 HEAD~1
HEAD又可以 以 @ 當成縮寫

# git 還原
* 取消 add (用VSCode即可)
////git rm --cached 檔名
* 取消 commit 
git reset HEAD 檔案名