# Code Quality
https://www.youtube.com/watch?v=jIkhz64DoK8&t=1s

* Code Convention 團隊規範
* Code Review 定期
* Checklist 上線前需達成的清單

檔案命名 / 縮寫哪些可用 / HTML Code

# 模組化(Module) / 觀察者(Observer)模式

模組: 寫法一致、避免全域變數
藉由CLI自動從樣板建立模組

限制團隊成員在沙箱(SandBox)中開發
只專注開發該模組功能、無法汙染外界
功能擴充也能有一致介面

# 需從軟體工程的角度出發
導入自動化、減少手工
* Lint 自動檢查程式碼
* Concat 自動合併/壓縮 JS/CSS
* 圖檔最佳化
* CSS 前處理器

# JS Pattern

# EDD - 設計文件
圖表 / Branch / URLS / 檔案結構 / Controller
模組詳細說明 / 預先規劃的假資料

# Refactoring 重構 ////打掉重寫
持續且小的改進，保留好的Code，而非整個打掉

無法一開始寫出完美的程式碼
藉由實做、看到問題與需求，
再著手修正逐步達成理想的程式碼品質

//! 重構的價值
Ex: Pop-up視窗 寫法多種 統一後
* 減少程式碼異常現象
* 減少UI的不一致
* 未來開發更容易

# Decoupling 解耦 / 抽離
避免所有程式碼都放在一個JS中

//! JS要考慮載入的先後順序
//* JS本身缺乏模組的概念  (ES6才有)

//? 不同頁面眾多、切割不易
不同業面，放不同JS難以分隔 (其他語言用require即可)

//* JS缺乏軟體工程的態度
非本科: 對程式抽離、正規化概念薄弱
本科: 對JS不用想這麼多吧

# 代碼抽象三原則

* Do Not Repeat Yourself
* YAGNI 你不會需要他
快 + 簡單 ! 不要把精力放在抽象化上
* Rule of 3 三次原則
當同樣的情況出現三次才進行抽象化


# 採用模組化 Library (requireJS)
解決 HTML中JS缺乏模組機制的問題

//? 一個JS檔案不應超過500行
//? 一行不應該超過100個字元