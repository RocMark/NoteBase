# Vue Router 用途
1. 控制網址
2. 判斷是否登入
3. Cookie狀態

# Vue Router
1. 安裝 vue-router
2. 於 src 新增 router.js
3. 於 main.js 新增 import router
4. APP.vue 建立架構
```js
  import Vue from "vue";
  import Router from "vue-router";
  import Skills from "./components/Skills.vue";

  Vue.use(Router)
  export default new Router ({
    routes: [
      {
        path: '/skill/:name',
        name: 'skills',
        component: Skills
      },
      {
        path: '*',
        redirect: '/',
      },
    ],
  })
```
```js
  import router from './router'
  new Vue ({
    router,
  })
```
```html
  <template>
    <nav>
      <!-- to 對應 router 中的 路徑 -->
      <router-link to="/">Home</router-link>
      <router-link to="/hello">hello</router-link>
    </nav>
    <router-view />
  </template>
```

# 取得 route 的 name
* router.js 中 的 name
於 Skills component 中 data 書寫
* this.$route.params.name 
```js
  routes: [
    {
      path: '/skill/:name',
      name: 'skills',
      component: Skills
    },
  ]
```
<script>
  export default {
    name: "Skills",
    data() {
      return {
        pathName: this.$route.params.name
      };
    },
  };
</script>




# VueRouter 使用預備
> 網址上的 # 字號，需要由後端配合消掉
* VueRouter 等同於 HTML8 History API

* 建立 要切換的區域 router-view
其之外，頁面切換不受影響
* router-view 內容由
VueRouter 本體 中 routes 中的 component: List 來決定
```html
  <div id="app"> 
    <h1>This Will Stay</h1>
    <router-view></router-view>
  </div>
```

# VueRouter 本體
* routes
放所有需要的網址
* 順序有差，從上到下檢查，越重要的放越前
* 路徑 例外處理
可透過 redirect 導回首頁 或 另外製作 404頁面
path: '*'
* 參數
path: url路徑
name: 路由名字 (調用方便)
component: 顯示的元件
```js
  const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'list',
        component: List,
      },
      {
        path: '/update/:id',
        name: 'update',
        component: Edit,
      },
      {
        path: '*',
        redirect: '/',
      },
    ],
  })
```

# 呼叫 VueRouter
this.$router 有兩種方式 / 傳遞參數亦有兩種方法
1. push 會產生記錄 可上下頁切換
2. replace 不會產生記錄 不可上下頁切換

# this.$route 差異 this.$router
* $route 為 當前的路徑狀況
因此需要取得網址參數使用此
this.$route.params

* $router 為 VueRouter
若要做頁面切換使用此
```js
  this.$router.replace({ path: `/update/${id}` })
  this.$router.push({ 
    name: 'home', // VueRouter 中取的 name
    params: { id },
  })
```