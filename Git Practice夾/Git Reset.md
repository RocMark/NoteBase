# Git Reset
- Git 中 Reset 並非重新設定，而是往前、變成的意思。
- 因為只是往前，之前的 Commit 並非被拆掉，仍是可以取得的 (git reflog)
```
  // 回到前兩個 Commit 的狀態
  $ git reset HEAD~2
```

# Git Reset
- ^ 表前一個
- ~ 加數字表回到前n個
```
  // 回到前兩個 Commit 的狀態
  $ git reset HEAD^^
  $ git reset HEAD~2
  $ git reset master^^

  // 查詢 SHA-1 值
  $ git reflog 

  // 指定要回到哪個節點的狀態
  $ git reset e12d8ef
```

# Git Reset 參數
設定上一個 Commit的檔案該如何處理
- mixed  (預設) 檔案留在工作目錄(未add)
- soft 檔案留在工作目錄 & 加入暫存區(add)
- hard 直接丟棄

# SourceTree
1. 右鍵要回到的節點
2. 選擇 Reset master to this commit
3. 選擇參數即可

# 參考資料
[五倍紅寶石](https://gitbook.tw/chapters/using-git/reset-commit.html)