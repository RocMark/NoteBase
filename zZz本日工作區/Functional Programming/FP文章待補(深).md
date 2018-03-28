# Functional Programming (FP)
利用Function去抽象化資料的操作，
以語意隱藏每個步驟的實做細節，
達程式碼可讀性更高，
更容易用pipeline的方式對資料流做分析。

但成事的效率 & 抽象化(abstraction)通常無法兼得
Ex: FP常用的 currying / recursion 效率沒 for 來的高，
還要注意 stack overflow等問題。

//! 待補看完

# 資料來源
> http://mis101bird.js.org/function/

# 解說 context stack & JS function 原理
JS 呼叫Function實，會在內部創建一個記錄目前Function執行環境的物件(Execution Context frame)並放入Function context stack

Function context stack 被JS設計用來儲存這些 Execution Context frame
，記錄整個程式執行的狀況。

當程式啟動，Global Context frame 會與 Function context stack 一起生成，放在Stack最底端，儲存著程式的全局變數。

每一次呼叫 function 都會在 context stack 產生新的 Execution Context frame，最前方的 context frame 叫做 active context，是目前 code 的執行環境。在 code 執行完成後，active context 會被移出 stack，換下一個最前方的 context 當 active context，以下圖為例就是 logger。

