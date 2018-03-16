# JS & jQuery AJAX比較

# AJAX
//? jQuery AJAX
```js
    $.get('url', (data, status) => {
        console.log(`"Data: ${data} "Status:" ${status}`)
    })

    $.post('url', {
        // ? 第二個變數為要傳遞的data
        name: 'RocMark',
        country: 'TW',
    }, (data, status) => {
        console.log(`"Data: ${data} "Status:" ${status}`)
    })

    $.ajax('https://some.url',{
        success: (data) => { /* do stuff with data */ }
    })
```

//? JS Fetch API
```js
    fetch('https://some.url')
        .then(response => response.json())
        .then(data = >{
            // do stuff with data
        })

    //* jQuery Load方法 存取資料用 無發送請求
    function loadDoc() {
        $('#demo').load('url .txt檔', (responseText, statusTxt, xhr) => {
            if (statusTxt === 'success') {
                // do stuff
            }
            if (statusTxt === 'error') {
                console.log(`Error: ${xhr.status} : ${xhr.statusText}`)
            }
        })
        
    }
```

//* 原始版本 JS AJAX
```js
    function sampleAJAX() {
        let ourRequest = new XMLHttpRequest()
        ourRequest.open('GET', 'data url', true)
        ourRequest.onreadystatechange = function () {
            if (ourRequest.readyState === 4 && ourRequest.status === 200) {
                //* >= 200 && < 400 狀態碼範圍待查
                //* 將取得字串轉成JSON物件 再處理
                let ourData = JSON.parse(ourRequest.responseText)
                renderHTML(ourData)
            } else {
                // Error Handling
            }
        }
        ourRequest.onerror = function () {
            // Error Handling 此方法好像被棄用了 待查 
        }
        ourRequest.send()

        let article = document.querySelector('.demo')
        function renderHTML(data) {
            let htmlString = ''
            //* 待改成 high-order寫法
            for (let i = 0; i < data.length; i += 1) {
                htmlString += `${data[i].name}`
            }
            article.innerHTML(htmlString)
        }
    }
```

# 相同處
- remove() //* 移除元素
- prepend() //* 加入其下
- before() //* 加入其後
- replaceWith()  //* 取代元素
- closest('div') //* 尋找最近的 [ 目標種類 ] 的父元素

> $('.inner').prepend(`<p> Test </p>`)

