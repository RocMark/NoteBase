#29 input binding
* v-model.lazy 
延遲載入 當 blur 才做資料更動

#30 CheckBox Binding
* input v-model="一個陣列變數" 
* 當 checkbox check時 會將 該input 的 value 加入該陣列
```html
  {{ cate }}
  <div id="checkboxes">
    <label>
      <span>One</span><br>
      <input v-model="cate" type="text" value="One">
    </label>
    <label>
      <span>Two</span><br>
      <input v-model="cate" type="text" value="Two">
    </label>
    <label>
      <span>Three</span><br>
      <input v-model="cate" type="text" value="Three">
    </label>
  </div>
```
#30 Select Binding
```html
  {{ gender }}
  <select v-model="gender">
    <option v-for="option in options" :key="option.id">
      {{ option }}
    </option>
  </select>
```