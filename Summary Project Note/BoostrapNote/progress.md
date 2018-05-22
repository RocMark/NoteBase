## progress [Done]
* 不使用 <progress>  確保您可以堆疊、加動態效果，並放置文本標籤。
* role & aria 助語意 & 朗讀軟體

### progress 整體樣式
//! 注意 w- 只有 25/50/75/100 可用 其餘需要自訂
w-75 表整個的寬度，非進度
style="height: 1px;"  //* 如果有使用文字注意高度

###  progress-bar 樣式
* 表示目前為止的進度
利用 行內樣式 / w-75 (通用類別) / 自訂CSS

* 使用 bg-* 調整進度條顏色
* progress-bar-animated CSS3流動特效
* progress-bar-striped 條紋

### progress 補充
多個進度條 .progress>progress-bar*3
```html
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
```