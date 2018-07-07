#26 Life Cycle hook
1. new Vue()

* BeforeCreate
在 Vue 實體被創造前 執行，
此時無法取得 Vue 中 Data 宣告的值

2. Observe Data 載入 Vue 中 Data 值
3. Init Events

* Created
Vue 實體被建立，可取得 Data
可以在此做 fetch data 的動作，亦可於 mounted

4. Has 'el' option?
判別 root & component 

* BeforeMount (很少用)

5. 建立並渲染 template

* Mounted
建立並渲染 template 完成

6. Mounted後 若資料更動

* BeforeUpdate
此處可以做 loader
7. Virtual DOM re-render & patch
* Updated

6. Mounted後 vm.destroy() 被呼叫
* beforeDestroy
7. 卸載 watchers / 子元件 / 事件監聽
* Destroyed

# 範例