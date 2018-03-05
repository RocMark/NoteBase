# jQuerySelector

# CSS3 Selector

* 選定哪些子元素
```js
$('ul#list li:first').css('color', 'red')
// li:last / even / odd / nth-child(3n)
```

* 選定Input Type
```js
// submit / text
$(':button').hide()
```

* 屬性選擇
```js
$('[href]').css('color','red')
$('[href="http://yahoo.com"]').css('color','red')
```