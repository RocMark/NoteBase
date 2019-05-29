# RWD圖片技巧整理

# 圖片架構
1. div 設置 bgi
2. div > img
3. div > figure > img

# 圖種
a原圖 高清 / b原圖 小圖

# 圖片大小設置方法
- 給與固定寬高、避免變形 (RWD不佳)
- 使用 cover 多餘的部分會被裁切掉
- 使用 contain 會有額外的留白

# img vh / vw 螢幕的寬高
div > img
width: 100vw / height: 100vh


# CSS基礎篇
> background: #000 url("~") no-repeat right top fixed
> 由 bgc/bgi/bg-repeat/bg-position組成

//* bg-attachment
scroll (default) / fixed (圖片不會跟著捲軸滾動)

# bg-size
> 必須寫在bg之後
//* 前為寬 後為高 只給與一個單位等同於只設定高
- auto / initial (default)
- 100px 50rem (可混單位)
- 500px 500px (設寬500 / 高500)
- 500px       (等同於 寬500 高 auto)

//! 使用 % 數設定時，容器需要有寬高 (body h100%)
> 否則圖片不會顯示
//* 設定的寬高 %數，依據標準為 容器
- 50% 50%  
- 

//* 對大小圖的效果相同
- auto 100% = cover效果
- 100% auto = contain效果


//* 給與固定寬高時，且不等於圖片寬高比時，會造成圖片變形
//* 放大圖片會造成模糊

# bgsize contain vs cover
//! cover塞滿 contain包含

//* no repeat情況，容器寬高比與圖片寬高比不同
cover: 圖片寬高比不變、鋪滿整個容器，多於部分被裁掉
contain: 圖片寬高比不變、縮放至整張圖能顯示，因此會有區域留白

//* repeat情況
cover: 同上
contain: 容器內至少有一張完整的圖，留白部分繼續鋪，多餘部分裁切掉。

# 全屏圖篇

## body + bgi