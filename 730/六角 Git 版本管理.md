# 六角 Git 版本管理

# What is SVN?
Client Commit 版本至中央 SVN Server
版本僅存於中央，調閱需要連接去中央
* 優: 目錄權限管理容易、指令少易上手
* 缺: 只有當下版本內容，無法離線操作，建分支成本高，現較少支援

# What is Git?
分散式版本控制
本地皆有所有完整的版本，且可查看 Log
* 優: 可離線操作、建分支零成本、現支援
* 缺: 指令複雜
* 目錄權限管理: 使用 GitLab

# 基本指令
```
  $ git init 
  $ git add .
  $ git commit -m 'msg'
  $ git status // 查詢當前檔案狀態
  $ git log    // 查詢所有 Commit 節點
  $ git reflog // 查詢所有 Git 指令紀錄
```

# Git 遠端基本指令
```
  // depth 表示要包含的節點數量
  $ git clone --depth <depth> -b <branch> <url> .

  // 將 commit 後的結果 推至遠端
  // -u 用於追蹤該分支對應的遠端分支
  $ git push -u origin master

  $ git pull 
```

# git pull 被拒絕
- 表 遠端庫 有內容被推上，但本地端還沒有同步
- 須先進行 git pull 或 fetch 同步才可上傳
```
  $ git push
  ![rejected]
  error: failed to push some refs to '~'
  hint: Updates were rejected because the remote
  contains work that you do not have locally.
```