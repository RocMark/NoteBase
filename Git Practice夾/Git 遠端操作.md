# Git 遠端操作比較

# fork vs clone
//* 自身github就有一個一模一樣的倉庫，但URL不同

fork  將別人的庫，複製一份到自己的庫
clone 將 github中的倉庫複製到本地電腦

# pull request
> 倉庫主人沒將我們設定為 項目合作者，我們將倉庫clone到自己電腦修改後，無法用 push推上去。

> 想貢獻的作法
fork a 的倉庫，將修改的碼push上自家倉庫，再進行pull request，主人就會收到請求，並決定是否接受

# fork 後 項目更新 怎辦
fetch更新檔，再判斷merge

# fetch vs pull
pull = fetch + merge
//! 避免使用 pull
//? 多使用 fetch + merge
fetch時可以檢查下來的更新是否合適

# Git fetch
相當於從遠端獲取最新版本到本地，不會自動merge

# Git pull
相當於從遠端獲取最新版本到本地，並且自動merge
