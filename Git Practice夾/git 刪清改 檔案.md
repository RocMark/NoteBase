# git 刪除(rm) 清理(gc) 修改檔名(mv)

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


# 修改檔名 (mv)
* 直接改 => git add / commit
* git mv 原檔名 新檔名 / commit (上下同效果)

# git gc (garbage collection 縮寫)
git gc --auto

//* 需時長,偶爾用即可
--aggressive 

//? 會先判斷是否需要清理
--auto 

//* 不作清除 repo中 不用的 data 僅整理他們
--no-prune 


#　git rm 刪除檔案

# 較佳解
於 folder 直接刪除 git add / commit 即可

# git rm 一般流程
git rm 檔案名
1. 先比對 index 是否有該檔
2. folder 的檔與 repo的檔是否相同
皆通過 可用 git status 檢查一下
git commit 完成刪除