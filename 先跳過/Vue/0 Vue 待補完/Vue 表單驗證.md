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