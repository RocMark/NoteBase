# Git Remote 

//* git remote add origin [url]
//* git push -u origin master

# Git Push 免帳密?
//? git config credential.helper store
//* git push [url]
//* 輸入帳密後，下一次只要git push即可

# Git 移除 origin //* 成功
> git remote remove origin
> git remote add origin ~.git
> git push -u origin master

//* 亦可設置成有ExpiredTime的 (2hour)
> git config --global credential.helper 'cache --timeout 7200'