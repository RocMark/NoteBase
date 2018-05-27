# git rebase
更新分支的起始點。

> 用於分支開發時長，主分支更新為使分支與主分支同步，達架構一致性。

//? 將主幹更新合併至開發分支

# git merge 情境
若當 master 一直有更新後，進行多次 merge，
會造成 演進圖像蜘蛛網一樣錯綜複雜

git checkout draft //* 於要更新的分支上執行
git merge master 

# git rebase 情境
git rebase 的 演進圖，較乾淨簡單

# git rebase作法
原分支從 A長出，master 更新B，分支進行rebase
//! 原從 A 長出分支， 變成從 B 長出

git checkout draft //* 於要更新的分支上執行
git rebase master

# 有可能會產生 conflict
--abort 放棄

處裡完衝突後， 
//? git rebase --continue

# git rebase 還原
git reflog 分支名 
找出 rebase 指令前的 CommitID

# 注意項
rebase會更動 舊的 commit 節點 (移動分支長出的位置)
若多人合作，有可能造成不一致，此時就不太適合用 rebase
改用 merge