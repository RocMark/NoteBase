# checkbox radios 整理

* 最外層 form-check 用於改善佈局
* disable 加入 .form-check-input 表禁用
* .form-check-inline 
//* 可用 label 內包 input 減少id 宣告

# checkbox with id & no-id
//? Snippets: cbox-id cbox-no-id
Text indent 用空格去調整
```html
    <div class="form-check pl-0">
      <label class="text-muted"><input disabled type="checkbox"></label>
    </div>
    
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="">
      <label class="form-check-label" for="">Text</label>
    </div>
```

# 無標籤版本
將 .form-check 無文字 input 加上 .position-static。 
補上 aria-label 較佳。
```html
  <div class="form-check">
    <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
  </div>
  <div class="form-check">
    <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">
  </div>
```