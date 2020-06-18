# 合併分支的方法
有一 master 其有一 feat 分支，欲將兩者合併
1. git merge (從被合併的分支，複製新的file內容到目前分支)
將 feat 最後一個節點當成 master commit 並合併
2. git rebase (更新分支的起始點)
將 feat 起始位置接至另分支的最新節點

# Git Merge 範例
- git merge --squash 合併後只提交一個記錄
```
  // 建立 feat 分支
  $ git branch -b feat

  $ git checkout master

  // 合併分支
  $ git merge --squash feat
  $ git commit -m 'merge feat'
```

# Git Rebase 範例
```
  // 確保遠端與本地同步(或fetch再merge)
  $ git checkout master
  $ git pull

  // 將 feat 錨點移至 master 最新的節點
  $ git checkout feat
  $ git rebase master

  // 將 feat 節點複製到 master 上
  $ git checkout master
  $ git rebase feat
```

# 兩者比較
- git merge 分支過多，圖形會複雜
- git rebase 一直線易追蹤，但小更動就 Commit 亦會不易管理，不適合用於開源專案

# 參考影片
依順序觀看
1. [A Better Git Workflow with Rebase](https://www.youtube.com/watch?v=f1wnYdLEpgI)
2. [Git MERGE vs REBASE](https://www.youtube.com/watch?v=CRlGDDprdOQ)