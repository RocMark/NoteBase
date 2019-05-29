# Vue Cli Note

* method 使用 this 時
先用 let vm = this 宣告，
避免後續 this出錯 難以修正
Ex: Promise 後的 then

* vue 只支援 BS4 (sass)

# Vue Global Setup

npm i -g vue-cli


# Vue-cli SetUp
  0. npm -v / node -v / npm i -g vue-cli
  1. windows
  cmd > cd desktop (用 tab 可自動補齊)
  2. vue init  webpack-simple F2E Week5
  vue init <tpl name> <project name>
  > vue list 可查 tpl name
  3. cd 進該專案夾
  code .
  4. npm install
  5. npm run dev
  6. npm run build (產生 dist資料夾)
  要 compile出成果在用

# BS4 安裝
npm install sass-loader bootstrap@4.0.0-alpha.6 node-sass --save
* 將此二修改於 App.vue (根元素)
<style lang="scss">
@import "~bootstrap/scss/bootstrap";

# router-link 寫法
<router-link :to="'home'">Home</router-link>
<router-link :to="'/hey'">Hey</router-link>
<router-view/>