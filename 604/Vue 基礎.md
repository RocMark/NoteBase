# Vue 基礎
>https://www.youtube.com/watch?v=JsPjNJONyd4
Javascript 數學腦筋急轉彎 後面 1Hour

* 資料驅動畫面

```html
<p>身高: {{height}}</p>
```
```js
new Vue({
  el: '#app',
  data: data,
  computed: {
    // Math.floor 等同於 >> 0 (無條件捨去)
    inch(){ return this.height / 2.54 >> 0},
    foot(){ return this.height / 2.54 }
  }
})
```