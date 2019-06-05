# Img Tag 屬性用法


## sizes & srcset 比較 (待完成)

### sizes

### srcset & src
> https://www.jianshu.com/p/607567e488fc
包含多個源圖的容器
由 圖片 URL & x(像素比) 或 w(圖片像素寬度描述)

```html
  <img
    srcset="
      http://placehold.it/2500 5x,
      http://placehold.it/1500 3x,
      http://placehold.it/1000 2x,
      http://placehold.it/500 1x"
    src="http://placehold.it/500/abc"/>
```

- title 圖片標題
滑鼠移到圖片上會自動顯示

- alt 替代文字
圖片失效時，會呈現的文字

- height / width


# 待完成
- crossorigin (另開文補充)
- ismap
- longdesc
- usemap