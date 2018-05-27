# 設置 .gitmessage 模板
1. 建立 .gitmessage file
2. 內文撰寫 Template
//? '#' 會被忽略 , 空msg 會取消 commit.
//* 不需要撰寫 時間&作者，git 會自動記錄
3. 設定template
//! 必用 \\ 作為跳脫字元
git config --local -e 進去修改設定
[commit]
	template = C:\\Users\\RocMark\\Desktop\\folder\\.gitmessage
4. git commit 即可 進入編寫