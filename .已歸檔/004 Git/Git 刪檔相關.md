# 將檔案移出 Staging Area 
>VSCode可用點的
git rm --cached  

# 清除untracked file
//? 在用git clean前，建議加上 -n 
//* 先查看會刪掉哪些避免誤刪

//* 刪除 untracked 檔案
git clean -nf
git clean -f

> 連untracked folder也刪除 
git clean -nfd
git clean -fd

> 連 gitignore 的 untrack文件/目錄也刪除 (慎用)
git clean -nxfd
git clean -xfd