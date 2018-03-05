# HandlebarsJS
> https://www.youtube.com/watch?v=wSNa5b1mS5Y

> https://handlebarsjs.com/
npm install --save handlebars

<!-- 使用pets Json Array -->
```json
{
    "pets": [
        {
            "name" : "One",
            "birth": "2008",
            "favFoods" : [
                "fish",
                "pork",
                "<strong>apple<strong>"
            ],
            "photo": "url"
        },
        {
            "name" : "Two",
            "birth": "2009",
            "favFoods" : [
                "fish",
                "pork",
                "apple"
            ],
            "photo": "url"
        },
    ]
}
```

```html
<div class="petsContainer"></div>

<script id="petsTemplate" type="text/x-handlebars-template">

{{#each pets}}
    <h2>{{name}}</h2>
    <div class="imgSection">
        <img src="{{photo}}">
    </div>
    //! HandleBar Condition!
    {{#if favFoods}}
    <div class="foodSection">
        <ul>
            {{#each favFoods}}
                //!this 即可取得favFoods中的項目
                //* 兩層{} => 文字
                //? 三層{} => HTML
                <li>{{this}}</li>
                <li>{{{this}}}</li>
            {{/each}}
        </ul>
    </div>
    {{/if}}

    //? calAge 為 JS Helper 
    //* birth 為 JSON 鍵值 要傳入Function用
    <p>Age: {{calAge birth}}</p>

{{/each}}

</script>
```
//* HandleBar 自建 Helper
```js
Handlebars.registerHelper("calAge", function(birthYear){
    let age = new Date().getFullYear() - birthYear
    if (age > 0){
        return age + "years old"
    }else{
        return "Less than a year old"
    }
})

```

```js
let rawTemplate = document.getElementById("petsTemplate").innerHTML

function createHTML(petsData){
    let rawTemplate= document.getElementById("petsTemplate").innerHTML
    let compiledTemplate = Handlebars.compile(rawTemplate)
    let ourGenerateHTML = compiledTemplate(petsData)
    let petsContainer = document.getElementById("petsContainer")
    petsContainer.innerHTML = ourGenerateHTML
}
```