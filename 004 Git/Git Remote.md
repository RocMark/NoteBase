# Git Remote 

//* git remote add origin [url]
//* git push -u origin master

# Git Push 免帳密?
//? git config credential.helper store
//* git push [url]
//* 輸入帳密後，下一次只要git push即可

//* 亦可設置成有ExpiredTime的 (2hour)
> git config --global credential.helper 'cache --timeout 7200'