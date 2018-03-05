# Git Remote 

//* git remote add origin [url]
//* git push -u origin master

# Git Push 免帳密?
> $ git config credential.helper store
> $ git push https://github.com/RocMark/repo.git
> $ 輸入帳密後，下一次只要git push即可


>https://github.com/repo.githttps://stackoverflow.com/questions/6565357/git-push-requires-username-and-password
> 上文解1
//* 錯誤點在於使用https而非SSH金鑰
//* 複製clone網址處可以改成 Use SSH
> git remote set-url origin git@github.com:username/repo.git

> git remote set-url origin https://name:password@github.org/repo.git [用於無法使用SSH時]

//* 亦可設置成有ExpiredTime的 (2hour)
[](git config --global credential.helper 'cache --timeout 7200')

//! 注意Local Repo 要先 git init
git push -u origin git網址
git add .
git commit -m "Commit"
git push -u origin master

* 推上 Remote Repo
git push origin master

* 下載 Remote Repo
(資料夾需要為空)
git clone 

* 下載並合併當前 Repo
git pull
