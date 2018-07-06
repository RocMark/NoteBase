# Vue Compo

# cdn 版
```js
  // 需寫於 root 元素之前
  Vue.component('greeting', {
    template: '<p>{{greet}}</p>',
    data() {
      return { greet: 'Hey', }
    },
  })


  // eslint-disable-next-line
  new Vue({
    el: '#app',
  })
```