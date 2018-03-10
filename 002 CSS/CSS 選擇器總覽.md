//* CSS 選擇器
> input[required] // 擁有該屬性的
> input[type="text"] // 符合敘述的

//? 格式
> p:first-line (母體用) //* ul也可用
> &:hover (Nesting用)

//* 母體
> a[href^="https"] //該屬性以https開頭
> a[href$=".pdf"] //該屬性以.pdf結尾
> a[href*=".pdf"] //該屬性包含cat

//* Link狀態
> &:hover
> &:active

//* Input 狀態
//! &:valid 是否有效
//? &:focus

> &:checked  //*用於input checkbox
> &:disabled
> &:read-only

> &:optional //*無有required屬性
> &:required //*有required屬性

//* 選擇子元素
> &:first-child
//* 無last-child 
> &:nth-child(3)

> &:first-of-type //*同類型
> &:last-of-type
> &:nth-of-type(n)

//* 文字系列
> p &:first-line  //*p tag 首行