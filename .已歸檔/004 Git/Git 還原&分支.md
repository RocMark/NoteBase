# Git 還原、分支詳解
> https://www.youtube.com/watch?v=NxoexgNOvgQ
> https://gitbook.tw/

# 大綱
- Git原理
- Git 分支觀念
- Git rebase意義
- Git reset HEAD^
- 搶救篇 (取消動作、還原)
- 問題解決篇
- 修改歷史記錄篇

# 重要Note
//! 分支 is 貼紙!
//* git reset 只是改變到指定狀態，並非刪除檔案
> --hard 表 把所有檔案都拋棄
> --soft 表 檔案丟回 暫存區
> --mixed  (預設) 表 檔案丟回工作目錄

//! HEAD 會指向 某一分支
//? 分支則會指向 一串樹狀圖

> commit id 為 SHA-1 hash的前幾位數

//* 合併過的分支要留著嗎?
> 基本無作用，因為檔案已經被加入其他分支去了
> 也可以作為記錄留著

////------------------------------------------

# Git 原理
> 23分處 重要Git原理 review!!
git 做 add / commit 產生的物件，會存於 .git資料夾內

> 以 DAG (Directed Acyclic Graph)有向無環圖 在畫觀念圖
//* git 不是做差異備份，而是進行做完整內容的備份(因此速度較快)
//* 拎葡萄 一整串的樹狀圖

# Git 物件包含
- Blob (類似檔案物件)
- Tree (類似資料夾物件)
- Commit (Commit 本體)
- Tag

////------------------------------------------
# 分支 32分
開分支並非複製資料，//! 而是類似貼紙/指標 (會移動的)
//* 因此分支刪除時，仍可將資料救回
開分支很便宜 (檔案小，僅為指向某個Commit的40字元檔案)

//* 分支為貼紙，無法合併
//! 實際上合併的是 Commit 不是分支

# HEAD 
HEAD 會指向所在的Commit(分支)
也是一個指標
//* git reset HEAD 並不會發生任何動作

# 標籤 Tag
標籤也是類似貼紙，//? 但是不會移動的
只能移除

////------------------------------------------

# Merge 
//* 合併者往前移動
//* 被合併的節點會留在原地
A 合併 B 做出專用的合併節點，並且 A往前移動

B 合併 A 做出專用的合併節點，並且 B往前移動

# Rebase 55分 //* 移花接木
A rebase B，將 A 複製貼上到 B 的屁股
A 會變為 HEAD，B 則保持原位

////-------------------------------------------

# 搶救篇

# 救回 git reset HEAD^ --hard
git reflog //* 可以查詢被reset的節點

得到 commit id後
> 使目前分支，狀態改回原本狀態
git reset b174a5a --hard 即可復原

# Merge 要 如何取消
> 一樣使用 reset 回到 未合併的狀態
git reset HEAD^ --hard

# Rebase 要 如何取消
//! 無法使用 git reset 回到上一步s

要取得有兩個分支 目標分支的 Commit ID

//* Git會幫你留下在做危險操作時的 Commit ID
> 但是連續兩次危險操作 就取不到想取的值
git reset ORIG_HEAD --hard

//* 亦可使用 reflog 去查詢 Commit ID

# 刪除的分支 如何救回? 1:19
git branch -d cat //* 會提示你 分支未合併
git branch -D cat //* 刪除

被刪除的分支，僅是看不見而已，並非被刪除

//* 找出刪除分支的Commit ID 即可救回

git branch 分支名 Commit ID
////--------------------------------------------
# 問題解決篇

# detached HEAD 斷頭狀態
當 HEAD 指向 沒有分支的地方時，會跳出的訊息(並非錯誤)
只是告知你在的位置而已

# 只選擇特定節點做 Commit Merge
取得該點ID 
git cherry-pick Commit ID

# 不小心把帳密放在 Git 中想把其刪除
//* rm -f 
git filter-branch --tree-filter "rm -f config/帳密檔"

filter-branch 可以針對該分支的每個Commit 節點做同一件事

//* 即使用此種方法刪除，仍可用 reset將其救回

////--------------------------------------------
# 修改歷史記錄篇

# 修改歷史紀錄  合併節點篇 1:28 //! 重要
//* 可以做到 合併多個節點 (太多瑣碎節點可用)
git rebase -i
//! 注意順序!! 與 ST相反

squash 可做到合併多個節點
```
    pick c1156c1 add cat 1
    pick fw156ff add cat 2
    pick eeeefff add dog 1
    pick deeeeee add dog 2
    改成 
    //* 往前壓 cat 1 & cat 2 合併成同一個
    pick c1156c1 add cat 1
    s fw156ff add cat 2

    //* 往前壓 dog 1 & dog 2 合併成同一個
    pick eeeefff add dog 1
    s deeeeee add dog 2
```

# 修改歷史紀錄  拆解節點篇 1:31
git rebase -i commit id
在要編輯的 改成 e

執行 git reset HEAD^  //!不要使用--hard
就會把東西丟回 工作區
git status
分開進行 git add / commit 即可拆成兩次

結束後再用
git rebase --continue //?繼續執行