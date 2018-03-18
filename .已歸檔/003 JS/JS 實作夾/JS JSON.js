// ? JS JSON

//! 30:43 多層JSON = > 利用兩層For loop
//* https://www.youtube.com/watch?v=rJesac0_Ftw&t=2s

// ---------------------------------------
// ? 註解區
//* 建立Request
let ourRequest = new XMLHttpRequest()
//* 選擇方法&資料來源 GET 取得資料 POST 傳送資料
ourRequest.open('GET', '../json/test.json')

//* 讀取Request及動作
ourRequest.onload = function () {
    // console.log(ourRequest.responseText)
    let ourData = JSON.parse(ourRequest.responseText)


    // 會只得到一個[，因為瀏覽器下載此檔案並不知道此為JSON DATA，
    // ? 因此要先利用JSON.parse 轉成JSON格式讓其知道

    console.log(ourData[0])
}
//* 發送Request
ourRequest.send()


// ---------------------------------------
// ! RealWorld Sample

const test = document.querySelector('.test')
test.addEventListener('click', () => {
    let ourRequest = new XMLHttpRequest()
    ourRequest.open('GET', '../json/test.json')
    ourRequest.onload = function () {
        // ! Error Handle
        if (ourRequest.status >= 200 && ourRequest < 400) {

            let ourData = JSON.parse(ourRequest.responseText)
            test.innerHTML = ''
            renderHTML(ourData)
        } else {
            // Error Msg
        }
    }

    ourRequest.onerror = function () {
        //* Error Handle
    }
    ourRequest.send()
})
function renderHTML(data) {
    let htmlString = ''
    for (let i = 0; i < data.length; i += 1) {
        htmlString += `
        <article>
        <h2>${data[i].title}</h2>
        <time>${data[i].date}</time>
        <p>${data[i].content}</p>
        <a class="linkBtn readMoreBtn" href="#">ReadMore</a>
        </article>
        `
    }
    test.insertAdjacentHTML('beforeend', htmlString)
}

