# Git Flow
他只是規範、工作流程，並非新技術

# Git Flow Master 分支
不允許在 master 進行 commit
只能從 Release 或 HotFix merge 回來

# Git Flow Develop 分支
由 master 分支出來的
整合不同即將 release 的 feature (不穩定可能有Bug)
通常也不會在此 commit
透過 merge 方式 將 feature(功能) merge

# Git Flow Feature 分支
功能開發，由 Develop 分出，完成後合併回去
功能 A、B 由 甲、乙 開發，完成後合併回 Develop

# Git Flow Release 分支
由 Develop 分出的 穩定已測試過的版本，
會 merge 回 master 以及 master

# Git Flow HotFix 分支
由 master 分出的，修復緊急的 bug
merge 回 develop & master

# Git Flow 範例
```
  $ git checkout master
  $ git merge HotFix
  $ git merge Release // release由

  $ git checkout master
  $ git checkout -b develop // 建立&切換至dev分支

  $ git branch -b feature1 // 建立feat分支

  $ git merge feature1     // 將feat分支合併進dev
  $ git branch -d feature1 // 刪除已合併分支
```

# Git SmartGit 教學
* SourceTree 亦有支援 GitFlow
- 建立資料夾
- SmartGit / Repository / Add 該資料夾
- Git init
- Git Flow 選擇 Full
- Git Flow / Start Feature

# windows cmd 開啟 git bash
```
  // windows x64 版
  start "" "%PROGRAMFILES%\Git\bin\sh.exe" --login
```

# 參考資料
[沈弘哲-Git-Flow 基本教學](https://www.youtube.com/watch?v=zXlta66thZY&list=PLteWjpkbvj7q-XkdT59HDx45F9ve_nT2b&index=2)
[SmartGit](https://www.syntevo.com/smartgit/download/)