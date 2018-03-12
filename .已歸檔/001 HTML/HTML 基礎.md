# HTML5 基礎知識

//? Why Need this ?<!DOCTYPE html>

# figure
//* figure用途 (tell browser 圖/SVG/CodeBlock與註明相關)
```pug
figure
    img(src="#", alt="")
    figcaption Nice Animal Pic
```
# Input List 用法 (datalist & select)
//* datalist 可自行輸入，Select否
```pug
input(list="itemCate")
datalist#itemCate
    option(value="MustDone")
    option(value="Routine")
    option(value="Others")
```


# Sematic 
```pug
header
    h1 siteName
    nav
        ul
            each navItem in 
                li
                    a(href="#") navItem
main
    section
        //- 用於多個相關類型的集合，例如下方多個article
    aside
        //- 相對於main(主要內容) aside表示次要內容
        //- aside 不只可用於sidebar，可用於任意處表次要內容
    article
        header
            h2
            p
                time(datetime="2013-06" pubdate) //!用法待查
        p Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, ea!
        footer
            p Meta Data
```