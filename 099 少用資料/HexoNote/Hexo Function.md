# 取得 Post md 的 meta資料
//! <%- page.title %>
* <%- page.date %>
* <%- page.content %>

//? 亦可自行創建變數
先於post.md metadata 創建
author: "RocMark"
* <%- page.author %>

# if state
<% if(page.title  == "AboutMe"){ %>
    AboutMe Page 123
<% } else { %>
    Not AboutMe Page
<% } %>

# for loop
//! 超重要 可以loop任意
>  posts / pages / tags / categories

<% site.posts.forEach(function(post){ %>
    <%- post.title %>
<% }) %>

# Helpers
//! 很有用的一些處理 (待整理待看)
> https://hexo.io/zh-tw/docs/helpers.html
<!-- 自動刪除空白 -->
<%- trim('  This is my String  ') %>
<%- titleCase('  This is my String  ') %>
=> This Is My String

<%- date('Date.now()','YYYY/M/D') %>
<%- time('Date.now()','h:mm:ss a') %>

# Data Files
source / _data / menu.yml
```yml
Home: /
Gallery: /gallery/
Archives: /archives/
```
<% for (var link in site.data.menu) { %>
    <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>