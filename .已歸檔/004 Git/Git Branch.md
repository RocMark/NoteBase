# Git Branch 相關

//* 創建分支
git branch 分支名
//* 切換分支
git checkout 分支名
//* 查看現有分支
git branch

//! 創建分支並切換過去
git checkout -b 分支名

//? 合併分支
//! 切換到需要保留的分支，做更新動作
git merge 分支名

//* 刪除分支
git branch -d 分支名

//* 查看分支內容
git log 取得 commit ID
git show 0ff66fe(ID前幾位)