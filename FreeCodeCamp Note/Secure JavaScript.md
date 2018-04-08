# Writing Secure JavaScript
https://www.youtube.com/watch?v=Xy1K8ODZC8w

# 檢測所用的 npm packages 是否安全
https://snyk.io/

# JS Traits VS Risk (見圖)

# 重點總結
- 考慮任何 encodings
Ex: HTML & URL Encoding //! WhiteList > BlackList
- Prevent long algorithm runs
//? Control Regex input lengths
- Beware Type Manipulation
- initialize Buffer with integers

# npm packages consideration
- Find vulnerabilities (test your app)
- Fix them (update/patch)
- Prevent adding vulnerable module
- Respond to new vulnerable

# npm 依賴性帶來的威脅
npm packages vulnerabilities
packages 相依 packages

# 攻擊面相

# 竄改URL
> 網址列 修改網址進入 靜態資源檔案放置的夾

# 竄改HTML
> encode 代替 原本字元 進行 XSS

# 正規表示法
//? 記得設至字串長度
若正規表示法，符合種類過多，且檢查的字串長度相當長，
single thread 會被占用很長的時間，
導致 app 被 鎖住 (UI無反應)

# mongoose Buffer
buffer allow us to preallocate our memory
若攻擊者可以allocate our memory並取得，資料就會被洩漏
Ex: Key,source code
//* remote memory exposure

# SQL injection
# XSS