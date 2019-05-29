# Label Input 用法

# label > input 
* 若要兩個並排 

1. stretch 占滿寬
外包一個 flex row no wrap 
> 使用 label nth-child() 去控制中間 間隔 [space-between]

2. 不 stretch 
> 把 width: 100% comment掉即可
或用 width: auto; 覆蓋

```scss
  label {
    display: inline-block;
    width: 100%;
    input {
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
    }
  }
```