# Git Tommy P3
> https://www.youtube.com/watch?v=PjQF6Bs3IHs

* git log --all

# git add -p
可以 stage hunk (y n 確認)
輸入 s 他會幫你切成小區塊
輸入 e 可以做編輯，將不要 stage 的 前加 #

# git checkout
* git checkout commitID  [少用! 盡量用分支名稱]
會將 工作區 和 HEAD 更新至該 commit
會產生 detached HEAD (git checkout master 回 master)


* git checkout index.html
還原檔案 至 修改前 (來源自暫存區)
(git add 過的不會被還原)

* git checkout commitID index.html

# git revert
做還原的動作