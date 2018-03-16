**本文用來記錄在其他電腦，創建工作環境時，遇到的障礙**

[Gulp篇連結](https://ithelp.ithome.com.tw/articles/10193298)

* 安裝VS CODE
* 安裝Node.js [windows系統]

* node -v npm -v 去檢查是否有裝好node.js

* 開啟終端機(cmd)，請使用以系統管理員身分執行
* 避免安裝一些套件時造成錯誤。
```
// 可以使用此行
net user administrator /active:yes
```

* 設定 VS Code內建終端機為系統管理員身分  [設定原文](https://stackoverflow.com/questions/37700536/visual-studio-code-terminal-how-to-run-a-command-with-administrator-rights)
右鍵捷徑 / 內容 / 相同性 / 最下面的 變更所有使用者設定

最下方的 特殊權限使用者等級 / 
已系統管理員身分執行此程式 勾起即可!!

* 如果 node -v 失敗，有可能是自動裝的環境變數沒裝好
使用node.js提供的msi檔安裝
會自動把環境變數幫你設好在
我的電腦 / 右鍵 / 內容
變更設定 / 進階 / 環境變數中

Path / 編輯 / 在一串字後加上;作為分隔用
```
// node.js msi幫加的
C:\Users\用戶名\AppData\Roaming\npm;

// 如果要全域使用mongod可以加入
C:\ProgramFiles\MongoDB\Server\3.6\bin;
```
* 如果仍無效，試試重開機 : (

* 仍然不行的話，
我使用過CCleaner把他移除在重裝msi檔，
就有正常加入路徑，並且可以使用。

* VS Code 準備 **Settings Sync 插件**
[教學可看這篇](https://medium.com/@mvpdw06/%E5%A6%82%E4%BD%95%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E9%9B%BB%E8%85%A6%E4%B8%8A%E5%90%8C%E6%AD%A5-vs-code-%E7%9A%84%E8%A8%AD%E5%AE%9A-82e7cd818ea7)

* npm install -g --save 
* 不使用-g 安裝的理由於下篇文章會解釋
* -g 表全域安裝  
// 全域安裝後，就可以直接在任何專案中使用該插件提供的指令
* --save 加到相依清單
* -dev => 安裝後寫在package.json的devDependence中
// devDependencies區塊是定義開發當中會用到的package，例如browserify

老實說我有看沒很懂.....  (請求指導QQ)
[dependencies 與devDependencies 的區別](https://zfanw.com/blog/difference-between-dependencies-and-devdependencies.html)


**建立task.json**
1. 建立 sass 檔
4. Ctrl+P 
5. 輸入 > 執行建置工作
6. 找不到......，請設定建置工作
7. 選擇 others 或 npm:start
8. 會幫你建立一個.vscode folder以及task.json
9. 將task.json 內容改成以下

* 注意!!!! VS CODE 版本不同寫法會不同
If you are using Visual Studio Code version 1.13 or earlier, 
please refer to the previous version of the Tasks
提供一下寫法教學，太懶了吃不動XD [原文(英)](https://code.visualstudio.com/docs/editor/tasks#vscode)
```
{
    "version": "這裡不用改保持原樣,
    "command": "gulp",
    "tasks": [
        {
            "label": "default",
            "type": "shell",
            "problemMatcher": [],
            "isBackground": true,
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

[下一篇繼續點此](https://ithelp.ithome.com.tw/articles/10193298)

* 參考資料
1. [Gulp學習筆記](https://kejyuntw.gitbooks.io/gulp-learning-notes/plguins/Tool/Plugins-Tool-browser-sync.html)
2. [Gulpfile.js 寫法很漂亮](http://blog.weisite.com.tw/%E5%B7%A5%E5%85%B7%E5%88%86%E4%BA%AB/Gulp%E5%BB%BA%E7%AB%8B%E8%87%AA%E5%B7%B1%E7%9A%84%E8%87%AA%E5%8B%95%E5%8C%96%E7%A8%8B%E5%BA%8F/)
3. [npm 基礎介紹](https://dotblogs.com.tw/lapland/2015/07/30/153008)
4. [Gulp API教學&排除文件](http://www.siyuweb.com/gulp/3207.html)
5. [Gulp Beginner](https://github.com/twtrubiks/Gulp-Beginners-Guide)