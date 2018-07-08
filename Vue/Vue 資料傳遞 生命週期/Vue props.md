#22 Props
由父傳給子的資料
* 利用 v-bind 將 父的資料 傳下去

* 子透過 props 去接收並運用
```js
  <template>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
  </template>
  
  // 此 ninjas 對應到 父中 data 內的 ninjas
  data(){ ninjas: [~], }

  // 子
  export default {
    props: {
      // 此處可先做傳入的資料型態驗證 fail 看 console
      ninjas: {
        type: Array,
        required: true,
      }
    }
    methods: {
      test(){ console.log(this.ninjas) }
    }
  }
  // 父層 切記要使用 v-bind
```