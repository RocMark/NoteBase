## 配色
primary (天藍) / secondary (灰) / success (綠)
danger (紅) / warning (黃) / info (水藍)
light (白灰) / dark (淺灰) / white

//? 盡可能使用 .text-* / bg-* 通用類別

### 容器配色
* text-* [text-muted 淺灰]
* bg-*   [bg-transparent 移除背景顏色]
* border-*
* table-*  [table-active]
注意: tr 優先度 > th / td
* 深色表格可用 bg-*

### 元件配色
* list-group-item-* [active]
* btn-* [btn-default]
* btn-outline-* [外框Style]
* alert-*
* badge-*

* progress [使用 bg-* 於 progress-bar]
* progress-bar-striped 條紋

## 背景漸層 .bg-gradient-*  //! 待補測
//! 預設 $enable-gradients 停用
當 $enable-gradients 設置為true時，才可用