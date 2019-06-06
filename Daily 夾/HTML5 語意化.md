# HTML5 P3

# 語意化標籤
* h1 
用於 網站標題
* 網頁大區塊
可用 div (推) 或 section 皆可
* header / footer
頁首/尾，可用於各區塊 (不常用)
* main (較少用)
主要區域

* nav (導覽列架構)
推 h1 > a 撰寫 css 會較好指定
```html
  nav > ul > li > a
  nav > a*5
```

* aside

# 文章中小段
* p 內無法包 div (避免!)
* mark bs3 也有

* i 是斜體字並非 icon 的意思
用 em 去表示較佳

* strong 較佳
* bold 粗體 (勿用)
```html
  <p>
    lorem300
    <span>lorem3</span>
    <mark></mark>

    <em></em>
    <i></i>
    lorem300
  </p>
```

# img / picture / figure
* alt 圖片無法讀取的替代文字
無障礙會用到
* figcaption 
圖片的說明
```html
  <figure class="figure">
    <img src="https://fakeimg.pl/100x100/" alt="">
    <figcaption>Text</figcaption>
  </figure>
```

# Section VS Article
兩者皆可互包
* article
* section 
可當文章章結
```html
  <section>
    <!-- 互相沒有關係的 -->
    <article>
      <h2></h2>
    </article>
  </section>

  <article>
    <header>
      <h1></h1>
    </header>
    <section>
      <h2></h2>
    </section>
    <section>
      <h2></h2>
    </section>
  </article>
```

# input:button / button / a
* input 通常跟 form 表單一起用
```html
  <button></button>
  <input type="button" value="斗內">
  
  <a href="#">斗內</a>
```