# GitNote

## 報錯處理
* git push origin master
* 解1: 加上-f 參數即可
* 解2: 加上--rebase 參再重新push
```
[root@linux1 php]# git push -u origin master 
```

* 忘了add!!
```
error: src refspec master does not match any. 
error: failed to push some refs to "xxxxxxx"
```
## git clone
* 本地沒有repository時，將遠程repository下載
* 把整個git項目拷貝，包含Log,分支(可操作)
## git pull
* 本地有repository，將遠程repository裡新的commit下載並merge本地
* 包含git fetch & git merge 兩種指令
* 會將remote repo(優先)與local repo合併
* 
## git fetch
    * 將更新從remote下載下來
    * 較git pull安全

# 分支合併後悔
    * git rest --hadr ORIG_HEAD
