# Git 介紹 VCS(版本控制)

# Git功能
1. 協同合作 2. 版本控制 3. 記錄改變
4. Revert Back 5. Local & remote repos (可不需網路)

# Git Config
git config --global user.name 'RocMark'
git config --global user.email 'onigir77799@gmail.com'

# .gitignore檔 (排除監聽對象)
/node_modules  (folder)
log.txt
*.txt

# Git 基本指令

* 初始化Local Repo 
(把 untracked files file 加入Index)
會創建.git folder
git init  

* 把檔案加入 Index
git add 

* 查看狀態
git status

* 查看commit 
git log 

* 把檔案加入 Local Repo
git commit 會進入類似文檔的地方Click i 就可以開始輸入