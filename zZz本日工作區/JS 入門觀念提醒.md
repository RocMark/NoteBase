# JS 入門觀念提醒

* script / css 位置解釋

> function => method
> property => Ex: innerHTML

# Attribute vs Property
> https://www.youtube.com/watch?v=Ut-ATm23_Pg

* HTML Attribute
由HTML定義，初始化DOM Property，初始化完成後功能即結束。
attribute value can't change

Ex: input#inputId(type="text" value="Tom")
value="Tom" (attribute初始化設定 DOM 的 value)

//? inputId.getAttribute('value') // Tom 
> 即使 Input內容修改 getAttribute仍不變

* DOM Property Ex: disabled
由DOM定義，property value can change
//* inputId.value 會因Input內容改變

# SEO
google 會等JS執行過一次，但仍使用Server Render較佳

# Error Msg
not defined 未定義該變數
undefined 有可能是程式碼順序問題(hoisting)