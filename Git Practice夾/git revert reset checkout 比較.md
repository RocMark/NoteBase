# git revert vs reset vs checkout 比較
> 原文 好文 值得 review
http://t.cn/RmnkIVO

* git reset 
會刪除所有節點，直到該節點

用來移除當前分支的一些提交
> Ex: hotFix*2 reset至 fix前版本--mixed，再次提交
> 等同於 2次 hotFix 變成一個 commit
> 過往的兩次 hotFix節點就會消失 (git gc會被刪除)

//! 會重寫分支歷史，勿用於公共分支

* git checkout commitID
//* 並不會對歷史有更動
//! 使用前先提交 / 緩存所有folder更改
切換至該 commit版本 加. HEAD不移動
不加. (detached HEAD)

* git revert 
撤銷一個提交，同時創建新的提交

不修改已經存入 git repo的資料，
而是把舊資料從該節點取出，並合併到當前 folder


//? 並不會重寫歷史，安全的作法

# 用處比較
//* git checkout 查看舊版本用
//? git revert  用來撤銷已經提交的Commit
//* git reset  用來撤消沒有提交的更改

>>>>> 以上為 版本層級的 還原

# 文件層面的操作

* git reset commitID 檔名 (--soft 參數無效)
將該版本的檔案 加入到 緩存區，以供下次commit使用

* git checkout commitID 檔名
捨棄 folder中的更改

* git revert 無文件層面的操作


# git revert 衝突解決
1. 手動解決衝突
2. git add 衝突檔
3. git commit 不加參數
> 因為要進入 git revert 自動開啟的文字編輯區，進行作業流程撰寫

# 注意點
git revert HEAD
> 使 folder 狀態回到 //* HEAD^ 狀態
> 使 folder 狀態回到 //? '前一個節點狀態!'
且 新增一個節點

git revert commitID
使 folder狀態回到 該commitID的 //?'前一個'節點狀態!

git reset commitID 
//* 則是回到 '該節點' 狀態
