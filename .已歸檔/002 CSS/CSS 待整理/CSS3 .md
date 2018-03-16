# Columns   //* 橫row 直columns
```css
    p {
        /* 兩直欄 中間空格用gap  中間border用 rule*/
        column-count:2; 
        column-gap:40px;
        column-rule: 1px dashed #eee;
        column-rule-color: red;
    }
```
# List Columns
//? 可以做到用CSS 切割ul至多直欄

```pug
    ul
        li
        li
        li lorem20
        li
```
```css
    ul  {
        column-count: 2;
        list-style: inside disc;
    }
    li  {
        -webkit-column-break-inside:avoid;
        column-break-inside:avoid;
    }
```