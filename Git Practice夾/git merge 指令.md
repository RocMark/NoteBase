# git merge 觀念

從被合併的分支，複製新的file內容到目前分支

> 目前位於 A 執行 git merge B
//* 會產生從 A 產生 分支節點，
此時 A 會有兩個 HEAD 用 HEAD^1 HEAD^2 指定 / commitID指定
> 分支合併後可以將B刪除
git branch -d B

--abort 放棄合併

# 還原合併分支 
git reset --hard HEAD^

# 合併類型
> git 會自動偵測，要以哪種合併方式
可用 --no--ff 避免 fast-forward

* fast-forward
> 較簡單，只在一分支作更動
不會產生 新的 commit節點
用於其 base相同，僅是將 master 快轉至 bug 的 HEAD 而已。

* 3-way merge
> 較複雜，兩分支合併，需要自解 conflict
會產生 新的 commit節點