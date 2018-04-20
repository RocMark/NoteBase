# jQ AJAX

# jQ AJAX 範例碼
```js
    $.getJSON('/json/cats.json', (json) => {
        $('.message').html(JSON.stringify(json))
    })
```

# 取得地理位置 範例Code
```js
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            $('#data').html(`latitude: ${position.coords.latitude}<br>longitude: ${position.coords.longitude}`)
        })
    }
```