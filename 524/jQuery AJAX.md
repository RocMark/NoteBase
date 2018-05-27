# jQuery AJAX

# getJSON / ajax

```js
  $.getJSON('url', (data) => {
    console.log(data)
  })

  $.ajax({
    type: 'GET',
    url: 'url',
    dataType: 'json',
    success(data) {
      console.log(data)
    },
  })
```