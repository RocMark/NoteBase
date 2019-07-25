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

# 子去對 props更動
page 為 父層利用 props傳下的

* 要在 父 template 呼叫 子元件時 加上 sync
sync 表 同意 子元件可以做 props 的修改
<chapter-thumb :page.sync="page"></chapter-thumb>

* 不能直接去修改 props
this.page = newData

* 必須使用 $emit 發事件給 父層做修改的動作
this.$emit('update: page', newData)

* update: page 為 Vue 提供的格式
update: 表更新
page 表要更新的目標