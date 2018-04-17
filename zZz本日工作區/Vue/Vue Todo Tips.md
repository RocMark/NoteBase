# TODOList 建立 Tips
* splice 刪除陣列元素
* indexOf 尋找相符資料
* v-if 設置資料狀態 & filter目標資料
```js
    let colors = ["yellow", "blue", "red"]
    function delItem (target) {
        let index = colors.indexOf(target)
        colors.splice(index, 1)
    }
    delItem("yellow")
    console.log(colors)
```

# 簡易 TODOList範例 1:24開始
> https://www.youtube.com/watch?v=8O3teHziU_E
```html
    <div id="app">
        <input type="text" placeholder="輸入事項" @keyup.enter="addTodo(newTodo)" v-model="newTodo">
        <h2>事項列表</h2>
        <ul>
            <li v-for="todo in todos" 
                v-bind:class="{ active: todo.completed }">
                <input type="checkbox" v-model="todo.completed"> {{todo.content}} -
                <a href="#" @click.prevent="removeTodo(todo)">刪除</a>
            </li>
        </ul>
        <pre>{{this.todos}}</pre>
    </div>
```
```js
    let app = new Vue({
        el: "#app",
        data: {
            todos: [],
            newTodo: ""
        },
        methods: {
            addTodo: function (todo) {
                //! this指向 data內容
                this.todos.push({ 
                    content: todo, 
                    completed: false 
                })
            },
            removeTodo: function (todo) {
                this.todos.splice(this.todos.indexOf(todo), 1)
            }
        }
    })
```