# CSS3

//? 有用到在回來把整理補上!

[教學系列](https://www.youtube.com/watch?v=mK1NGZwOuaA&list=PLLnpHn493BHFOoBjPGOcWL1PnY0H1w5N_&index=13)

* border radius
* text shadow
* box shadow
* box sizing
* linear gradients

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

# Multiple Background

# Google WebFonts

# Animation