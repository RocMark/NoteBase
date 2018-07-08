# Vue transition
* router-view 必加 key 
用 router 完整的路徑當 key，才能確保每頁切換都有動畫
否則 /comics/1 /comics/2 會無動畫!
* fade 為 自行撰寫的 動畫效果名稱 (如下)
格式 要照著 Vue 給的格式去撰寫

<transition name="fade" mode="out-in" appear>
  <router-view :key="$route.fullPath"></router-view>
</transition>

```scss
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave {
    opacity: 1;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
```

# vue animation 
> https://cn.vuejs.org/v2/guide/transitions.html

* 前墜使用 transition tag 中的 name
enter-active & leave-active
<transition name="alert-in"></transition>
```css
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% { transform: scale(0);}
    50% { transform: scale(1.5);}
    100% { transform: scale(1);}
  }
```
# 使用第三方的 animation class
> https://daneden.github.io/animate.css/

* 注意!! 會覆蓋 name 的特效
<transition name="alert-in" 
    enter-active-class="animated flipInX"
    leave-active-class="animated flipOutX"></transition>

* 將 import 寫於 style 內
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";
</style>

# transition-group
* key 為必須的，不然會跳錯
```html
  <ul>
    <transition-group name="alert-in" 
                enter-active-class="animated bounceInUp"
                leave-active-class="animated bounceOutDown">
      <li v-for="(skill) in skills" :key="skill.id">
        {{ skill }}
      </li>
    </transition-group>
  </ul>
```