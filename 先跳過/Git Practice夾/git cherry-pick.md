# git cherry-pick

也是一種合併，處理對象是 //* Commit節點

將某一commit節點，合併至 folder file

git cherry-pick commitID

執行此會產生新的 commit節點，加上 -n 可不產生

執行前必須將已修改檔案，先加入檔案庫

--abort(放棄)

解完衝突後 add / cherry-pick --continue