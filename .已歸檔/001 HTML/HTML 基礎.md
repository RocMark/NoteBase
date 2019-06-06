# HTML5 基礎知識

# figure
//* figure用途 (tell browser 圖/SVG/CodeBlock與註明相關)
```pug
    figure
        img(src="#", alt="")
        figcaption Nice Animal Pic
```

# Input List / 提示字
```pug
    //- list 對應 datalist的 id
    input(type="text" list="input-list")
    //- 輸入 V 時會出現下列提示字
    datalist(id="input-list")
        option(value="Val1" label="Val 1")
        option(value="Val2" label="Val 2")
        option(value="Val3" label="Val 3")
```