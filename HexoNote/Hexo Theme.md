# Hexo Theme
> https://hexo.io/themes/index.html
> 於上網址選定一個theme並取得.git位址
git clone theme的.git位址 themes/theme名
//? 於_config.yaml中修改
theme: theme名
//* 記得重啟 hexo server

# 自建Theme
* themes中自建資料夾
* 建立config.yml
* 建立資料夾 
languages / layout / scripts / source

//? 記得修改_config.yaml theme: theme名
//* 記得重啟 hexo server

# layout資料夾下 template檔案
* layout / layout.ejs //? 所有頁面皆會使用此 [全域基礎模版]

* index.ejs / post / page / tag / categories [各頁模版]

* 各頁模版會被insert到全域模版至下
//!  <%- body %> 

# 各元件管理 (layout/partial/header.ejs)

<!-- 傳入變數 -->
<%- partial('partial/header',{title: 
'Hello world'}) %>
<h1><%= title %></h1>