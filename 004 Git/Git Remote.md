# Git Remote 

//* git remote add origin [url]
//* git push -u origin master

# Git Multi Line Commit
> git commit -m 'First line
> Second line'

# Git Push 免帳密?
//? git config credential.helper store
//* git push [url]
//* 輸入帳密後，下一次只要git push即可

# Git Force Push 
> -f is --force shorthand
//* git push -f origin master

# Git 移除 origin //* 貌似成功了
> git remote remove origin
> git remote add origin https~
> git push origin master



//* 亦可設置成有ExpiredTime的 (2hour)
> git config --global credential.helper 'cache --timeout 7200'