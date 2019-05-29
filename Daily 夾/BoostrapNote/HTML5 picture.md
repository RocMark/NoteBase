# HTML5 picture
用來設定在不同條件下(螢幕寬度、高度、方向、像素密度)載入不同的圖片。

//! IE 11 / Opera  Mini Can't Use
=> Picturefill (polyfill)
https://goo.gl/W3HaqT

* 避免尺寸不合，難以調整
* 避免浪費傳輸量、下載時間

## Img 預設 CSS
```css
  img {
    max-width: 100%;
    height: auto;
  }
```

## HTML5 <picture> 標籤
不需要 JS / CSS，即可達響應式圖片

//! 順序很重要
瀏覽器會依 首個符合的 <source> 忽略後續的

<picture> 本身只是容器
### 屬性
* srcset 指定替代圖片的路徑
* media 同 css 的 media query
(max-width: 40em) and (orientation: landscape 水平 / portrait 垂直)
* sizes 圖片尺寸
sizes="100vw"  / sizes="(max-width: 30em) 100vw"
* type 圖片格式 

### 架構
最後的 <img> 作為 <picture> 的預設圖片 
=> [當瀏覽器不支援、沒符合的 source 使用]
<img> 必放最後，瀏覽器會所有之後的 <source>
```html
  <picture>
    <source srcset="smaller_portrait.jpg" media="(max-width: 40em) and (orientation: portrait)">

    <source srcset="default_landscape.jpg" media="(min-width: 40em) and (orientation: landscape)">

    <img src="default_landscape.jpg" alt="My default image">
  </picture>
```


## 另法 (Bad)
預載多張不同尺寸，d-none隱藏
=> 浪費流量 & 載入時