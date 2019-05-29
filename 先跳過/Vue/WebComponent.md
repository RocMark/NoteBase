# WebComponent
> https://blog.techbridge.cc/2017/01/06/web-components/

//* HTML Template 已是 HTML5 標準

# Why need?
```
    //* JS/CSS/HTML 分開管理
    //* Scope 問題 (命名衝突)
    //* 相容性 (Framework間共用困難)
```
//* 前兩者可以透過 React/Webpack/CSS Modules 得到相應解法

# React vs WebComponent 目的
> React 主旨在於 state 與 view 的狀態管理方式
> Web Components 主力於 //! 整體元件的封裝

> React Component內甚至可以載入 WebComponent
> WebComponent 可以只是 Plain HTML,CSS,JS

# Web Components 是 W3C 擬定的標準
由 4大規範組成
- HTML Templates
- Custom Elements
- Shadow DOM
- HTML imports

//? 有可能會需要載入 polyfill(自動補完、相容性用)
> webcomponents.min.js  (Chrome53+ 不需)

# 實際範例篇

# Template 結構
//! 藉由 Template封裝，內部 CSS Style 不會受到外部CSS作更動
> 即便class name相同且覆寫也不受影響 ，甚至是!important
```html
    <template id="myTpl">
        <style>
            :host {
                position: relative;
                display: block;
                width: 300px;
            }
            p {
                color: orange;
            }
            .slot {
                font-size: 20px;
                position: absolute;
                bottom: 20px;
                right: 100px;
                color: yellow;
            }
            .wrapper {
                position: relative;
                width: 100%;
                height: 100%;
            }
            .wrapper img {
            }
        </style>
        <p>Title</p>
        <div class="wrapper">
            <img width="300px" src="jpg" />
            <div class="slot">
            <slot></slot>
            <div>
        </div>
    </template>
```
# Shadow Dom
> script 用來建立 Shadow Dom
```html
    <script>
        customElements.define('myTpl', class extends HTMLElement {
            constructor() {
                super(); //! 使用 extends 必須call super()
                let shadowRoot = this.attachShadow({mode: 'open'});
                const t = document.querySelector('#myTpl');
                const instance = t.content.cloneNode(true);
                shadowRoot.appendChild(instance);
            }
        });
    </script>
```
# 一般 HTML
```html
    <style>
        .slot {
            color: green!important;
        } 
    </style>
    <myTpl>你好，我是森山</myTpl>
    <div class="slot">other text</div>
```

# 概念篇 HTML Template
> HTML <template> 會創一個 cloneable 的 DOM
> JS不會執行、圖片不會載入
> 可用於整個web app的生命週期

> 過去作渲染頁面，可能會使用 字串串接

//* 有了 template 可以作到 字串部分與邏輯分離
//! 用於 複雜的HTML結構，template會比字串更容易維護
```html
    <button onclick="useIt()">Use me</button>
    <div id="box"></div>
    <script>
        function useIt() {
            const content = document.querySelector('#countTpl').content

            // Update text in template DOM
            let span = content.querySelector('span')
            span.textContent = parseInt(span.textContent) + 1

            let newElem = document.importNode(content, true)
            document.querySelector('#box').appendChild(newElem)
        }
    </script>
    <template id="countTpl">
        <div>Template used: <span>0</span></div>
    </template>
```

# 概念篇 Custom Elements
Custom Elements API 是構成 Web Components 的基礎之一

//! 待補

# 概念篇 Shadow DOM
主要設計來建構 Component-based 的 web app

# 好處
//* Isolated DOM: 於Shadow DOM 裡的任何node
//*不會被外部取得、汙染外部、被汙染

> Scoped CSS

> Composition

//? Productivity (模組化)
> Isolated DOM + Scoped CSS 可以切成多個 DOM Object

# 概念篇