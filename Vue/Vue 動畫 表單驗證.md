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

# vue 表單驗證套件
> https://github.com/baianat/vee-validate
> https://segmentfault.com/a/1190000011275513

npm i vee-validate -S

* main.js 加入該套件
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

* How to Use
1. 必須給予 name
2. p 中的 alert & if 內容由 套件控制 不需要字寫
skill 對應到 name 
3. 必須在 form submit 的 方法下撰寫如下
避免不符合的資料送出

<!-- The skill field must be at least 5 characters. -->
<form @submit.prevent="addSkills">
  <input name="skill" v-validate="'min:5'">
  <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill')}} </p>
</form>

```js
  addSkill(){
    this.$validator.validateAll().then((result) => {
      if (result) {
        // do stuff
      } else { console.error('Not valid') }
    })
  }
```