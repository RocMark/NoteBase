# pageNav 實作筆記

//* Simple Way
//* loop 時判斷該文章在第幾頁 並加上attr
//* 點擊 pageNav show那幾頁即可

//* Hard Way 效能較好
//* onload 只 render pageNav & 文章 0~4
//* 點擊 pageNav render 該頁 文章 0+(n*5) ~ 4+(n*5)


# attr() vs .prop()
> https://goo.gl/nzqpAb (桑莫)

attr() 取出來必為字串
prop() 可為任何值 (字串/數字...)

# jQuery AJAX

