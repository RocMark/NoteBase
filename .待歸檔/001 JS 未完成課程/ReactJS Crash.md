# React JS Crash Course
> building dynamic UI
> View in MVC

# 課綱
> https://www.youtube.com/watch?v=A71aqufiNtQ
> 建React app / 元件 / 處理狀態/attr / Event Handle
> Work with Forms/Input / JSX
> LifeCycle methods
> Fetch data from API

# 重要筆記
> JSX className (o) class="~" (x)
> JSX Comment {/* 要有括號括住 */}

//? VSCode 右下 可以切換成 JS React(以便使用html)

//? Function/變數 寫於 render之外
//* render元件的 Function 寫於 render之內

//!
```js
handleSubmit(e){
    e.preventDefault()
    console.log(this.refs.title.value)
}
render(){
    //! 必須使用 bind 不然Function 不知道 this是誰
    <form onSubmit={this.handleSubmit.bind(this)}>
}
```

# React JS 優點
> 對於各state 建立不同 view
> 封裝 components
> 動態 屬性(properties) & 狀態(state)
> Virtual DOM
> 各區塊獨立
> render on client or server

# Virtual DOM
> 只包含你所需要的
> 易於辨別改變的部分
//* ReactJS 會找需要更新的部分 只更新該處
> 更有效率的 upload browsers DOM
> Much More lightweight & Works faster

# Simple Application
```js
    class HeyMsg extends React.Component{
        render(){
            //* render為必要的 Function
            return <h1>{this.props.name}</h1> // JSX
        }
    }
    ReactDOM.render(<HeyMsg name="Jane"/>,mountNode)
```

# JSX (JavaScript Syntax Extension)
> A preprocessor step that adds XML syntax to JS
> Looks like XML / HTML
> 較易建立 tree structures with attr

# React 環境建立
> npm install -g create-react-app (才可使用cli)
> create-react-app 名字    (名字不可含有大寫)
//? npm start 啟動

# package.json (scripts)
> start: 啟動app
> build: compile所有東西 發布用
> test / eject

# public / index.html (可以移除所有註解)
<div id="root">所有東西會被渲染於此</div>

# src / index.js
> import ~ 匯入所需要的模塊
```js
    ReactDOM.render(
        <APP /> // Main APP Component
        document.getElementById('root')
    )
```

# src / App.js 
> GateWay to Main APP component
//? 用來當Components PlaceHolder
```js
    class App extends Component {
        render() {
            return (
            //! return 這層只能有一個元素
            <div className="App">
            </div>
            );
        }
    }
```

# 於 src 新建 / Components / Projects.js
//* 新建立檔案記得修改
- className
- exportName
- 去 App.js Import

//? Component {this.props.test} 
//* App.js <Projects test="Hey"/>
```js
    import React, { Component } from 'react';
    class Projects extends Component {
        render() {
            return (
                <div className="Projects">
                    My Projects
                    //! 使用 APP.js的傳入值
                    {this.props.test} 
                </div>
            );
        }
    }
    export default Projects;
```
```js
    //? 記得Import 才可以使用
    import Projects from './Components/Projects'
    class App extends Component {
        render() {
            return (
            <div className="App">
                My app
                //* 使用上面的模塊
                <Projects test="Hey"/> 
            </div>
            );
        }
    }
```

# 建立 constructor
> All our Project should be held in State
> usually fetch from API/DB
```js
    class App extends Component {
        constructor (){
            super() //! constructor 必不可少此
            this.state = {
                projects:[
                    {
                    title: 'Business Website',
                    category: 'Web Design'
                    },
                    {
                    title: 'Social App',
                    category: 'Mobile Dev'
                    },
                    {
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web Dev'
                    },
                ]
            }
        }
        render(){
            return (
                <div className="App">
                    <Project projects={this.state.projects} />
                </div>
            )
        }
    }
```
```js //*Projects
render(){
    console.log(this.props)
    return
}
```