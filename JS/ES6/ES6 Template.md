# ES6 Template //!重要
> https://www.youtube.com/watch?v=DG4obitDvUA&t=2s

```js
let Json = [{ title: 'One' }, { title: 'Two' }]

// 可用JS運算
let str = `
${2 + 2}
<p>Hi there.</p>
<p>${Json.length}</p>

// ? 抽出Template部分較易維護
${Json.map(JsonTemplate(pet)).join('')}

// * 原始樣貌
${Json.map(function(pet){
    // ! 可以藉由map loop 出JSON Object的值
    return pet.name
}).join('')}
`

function JsonTemplate(pet){
    return `
    <div class="box">
        <img src="${pet.url}">
        // ! 可以在Template中，使用Function
        <p> Age: ${age(pet.age)} </p>
        <p> ${foods(pet.foods)}</p>
    </div>
    `
}

function age(petAge){
    // 用來判斷age使其產生不同的結果
    let calAge = new Date().getFullYear() - petAge
    if (calAge === 1){
        return '1 Year Old'
    }else{
        return `${calAge}` Years Old
    }
}

// ! 在Template中使用 condition
// ${condition ? yay : nay}
// ${pet.food ? foods() : ''}

//? pet.food 會被當變數傳入 petFood
function foods(petFood){
    if(petFood){
        return ''
    }else{
        return `
        <ul>
            ${petFood.map(function(food){
                reutrn `
                <li> ${food} </li>
                `
            }).join('')}

            // ES6寫法 Arrow + 單行可以省{}&return
            ${petFood.map((food) => `<li> ${food} </li>`).join('')}

            // 單個變數還可更省，傳入多個變數
            ${petFood.map(food => `<li> ${food} </li>`).join('')}
            
            ${petFood.map((food, item , test) => `<li> ${food} </li>`).join('')}
        </ul>
        `
    }
}

    
```