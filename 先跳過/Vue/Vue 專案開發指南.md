# Vue 專案開發指南

# 容易出錯點
* 在元件上設事件要加 native
<router-link @click.native="someHandler"></router-link>

* calc 的 雷 
> 必須用 #{} 去註明該段 要用 SCSS先運算
height: calc(80vh - #{rhythm(10)})


# 從 router view 觀點下手
* 先開 Pages
* 將每頁要用的大區塊切出 
Ex: PageHeader PageFooter
* 先切 HTML 在做排版
* 記得去 App.vue Import 每頁都要用的區塊

# 撰寫JS
1. 撰寫 data 會用到的資料
2. 撰寫  mounted() 初始值
設定 data 初始值
做例外處理 
Ex: 取無資料 用 router replace 重新導向


# 分三層
* page (SSR) 
處理 API
* container
處理 Store (Vuex)
* component
Pure (只從 props取得資料)