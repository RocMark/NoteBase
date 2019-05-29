# 專業前端 都如何管理 CSS
https://goo.gl/zPvw7S

## 架構大解密
OOCSS的觀念下，視所有樣式為元件
button / form / grid

### Bootstrap 4 分析

* 檔案
BT.scss / _var.scss
core, component, utilities, component for JS

* 基礎
1. util (mixin)
2. global (var, normalize)
3. component (元件變數、元件模組)
4. @include

## Hugo 檔案架構管理

### Base
1. 基本屬性 CSS reset
2. 定義 Tag p List 樣式

### Helper
1. Var (色 / Grid變數 / 元件變數)
2. Mixin (元件樣式產生公式)
3. Function (單位換算)

### Components
### Layout 
* Partials / Grid

### Pages
* 例外頁面 (404)
* 重新設計的頁面
* 首頁
* 活動頁面

### Themes
* 節慶 / 活動
* 權限分別 (付費/免費會員)
* 色系 (Night Mode)

### Vendors
* 外部載入的 CSS
用於 JS套件載入

## 開發流程
1. all.scss 載入開發模組
2. 定義 helper變數
3. 增加元件 [元件特效跟元件寫在一起]
4. 增加 partials (header/footer)
5. Pages [頁面專屬特效]
6. 撰寫權限用 主題
7. 外部載入 _xxx.scss 放入 vendor區