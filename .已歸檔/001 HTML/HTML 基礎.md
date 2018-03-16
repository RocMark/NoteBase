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

# Sematic 
- h1 只用於 SiteName
- h2 用於各文章之首
- h3 各區塊的outLine

- section 用於多個相關類型的集合
> Ex: 底下多個article

- aside 相對於 main(主內容) 表次要內容

# article 語意範例
```pug
    article
        header
            h2
            time(datetime="2013-06" pubdate) //* pubdate 表發布時間
        p Lorem ipsum dolor.
        footer
            p Meta Data
```