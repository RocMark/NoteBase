# SVG (可縮放向量圖形)
- [SVG介紹文](https://bit.ly/2Ovthje)
- IE9+ 即支援
- 放大縮小不模糊
- 檔案小

## Animate.css 使用
- 於要動畫的DOM上加上Class (animate)
> http://caibaojian.com/animationend.html
```scss
```

## Animate.css 分解
- [Animate.css 庫](https://daneden.github.io/animate.css/)
- 不用整包都用 CDN，抽出要用的動畫即可，還能自製化並學習
- 前墜用工具處理即可 (WebPack,VSCode Autoprefixer)
```scss
  // 基礎必用 Class
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  // 調整重複次數 repeat: infinite
  .animated.infinite {
    animation-iteration-count: infinite;
  }
  // 調整動畫快慢 duration: fast,faster,slow,slower
  .animated.fast {
    animation-duration: 800ms;
  }
```