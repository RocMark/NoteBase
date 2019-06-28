# CSS 設計模式 ReView
> http://t.cn/RduONhn

重用性 維護性 延展性

## 命名大方向

1. 避免限制性命名 
Ex: product-list(x) list (o)
2. 避免用顏色名 
Ex: text-blue(x) text-primary(o)
3. 避免用位置命名
Ex: .left-menu(x) col-4(o)

## OOCSS
將 CSS 物件化、模組化
* 結構、樣式 容器、內容

## 將 結構 與 樣式 分離
結構 Ex: w,h,m,p, position

## 將 容器 與 內容 分離
* 容器 (大Layout)
> Ex: Main Footer Header
設置個區塊的間隔、media流動
* 內容
內部 Component化 已達複用性

# SMACSS
與 OOCSS 相似

## Base
基礎 reset / normalize / 只用一般Tag
## Layout
頁面切割 Ex: nav header sideBar
## Module
內容模組切割 禁用ID !!
## State
* 可用 .is-* 開頭  
> Ex: .is-hidden
元件狀態 用來給與樣式 (btn-info)
## Theme
* 可用 .theme-* 開頭  
> Ex: .theme-dark
Ex: Dark Theme 

# BEM
* 以功能導向命名
> 非樣式 mr-1 (x)
* 核心觀念 類似 Vue ReactJS

## Block
類似 SMACSS 的 Layout/Module

## Element
Block 之下的 小元件
* 以 Block Name 當做 Prefix

## Modifier
* 管理 Block & Elem 狀態