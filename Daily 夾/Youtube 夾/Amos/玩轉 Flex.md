# 玩轉 Flex

//! flex-basis 優先度
max-width > flex-basis > width/height

# bs4 
將 row 設成 flex
內部 column 皆為 flex-item

# bs3
row 只是處理 margin，內部皆為float去控制

# RGB 16進位色彩表示
0~9 a b c d e (縮寫為兩位皆同)
前2位為紅 中2位為綠 後2位為藍
想像開燈泡，紅燈打開其餘不開 (類推) 
<!-- 紅 #f00 綠 #0f0 藍 #00f -->
<!-- #faf #afa #aaf -->


# 資料流(主軸)   
//? align-* 之外的屬性 皆針對主軸
row 左->右  column 上->下
* justify-content
flex-start / center / flex-end
space-around / space-between


# 交錯軸 (次軸)   [與主軸垂直]
* align-items 
針對 //!單行 子物件
center / flex-start / baseline
* align-content 
針對 //?多行 子物件
space-*
* align-self 
用於子元素

# column狀態
若容器高小於物件 fixedH總和，即無法使用space-*

# order
default 為 0
設 1 放於最後
設 -1 放最前

順序: -2 -1 0 1 2 3 

# flex-grow / shrink / basis
* flex-shrink 收縮比 (較少用)
可以用來決定哪些欄 要縮小，哪些不要 
default: 1
若 flex-item 寬總和大於容器就會凸出容器

收縮比、超出値、扣除値 (每欄要扣多少)
總比値 = 各子項目*收縮値 加總
(子項目寬*收縮比/總比値) * 超出値 = 扣除値

* flex-basis
控制 flex-item 的 主軸長度 (非寬也非高)

//! flex-basis 優先度
max-width > flex-basis > width/height

# 用於單列，切分等份
//! 可用 flex-basis: 0 於 .item
接下來於 flex-item上 設定 flex: 1
其效果為 將整個父層的空間 拿來切割