# CSS3 Animation
> https://www.youtube.com/watch?v=B7UateVfh0A&t=77s

# 大綱
- transition
- 2D transform (改變已存在物件形狀)
- transform: translate (改變物件位置)
- 3D transform
- animation (KeyFrame)

- SVG animation //! 33分待補完

# CSS權重
inline > id > class > HTML tags(div)

# transition
//* 轉場特效
transition: property / duration / timing-Function / delay
- property
> 定義哪些 CSS properties會被轉場效果影響
- duration
> 轉場所花時間
- timing-Function
> http://cubic-bezier.com/ 可自行設定移動效果
//* ease / linear / ease-in
- delay 
> 多久才開始轉場

# transform 2D
//* 針對已存在物件做變形
transform: rotate(30deg) 往右轉 //* 往左用-30deg
transform: scale(0.5)
transform: skew(20deg)  往左歪斜20deg
transform: scale(0.5)

# transform: translate
transform: translate(200px)  //* 往右200px
//! 改變物件位置

# 改變物件位置選擇
//? translate 比 transition 效能好
//* transition 會需要用到 poab 易造成破版

# transform: matrix
合併多個 transform結果，對可讀性不佳，慎用
//* matrix generator
>http://ds-overdesign.com/transform/matrix3d.html

# 3D transform 17分  //! 用到 Review
//? 視角 靠近人的物體會變大，反之

1. 設定 perspective-origin: center 
//? 視角位置

2. 設定 perspective-distance: 500px
//* 眼睛距離畫布多少

3. transition: all 2s 轉場效果
4. 觸發效果事件
&:hover
    perspective: 200px //? 距離縮短 => 物體放大
    perspective-origin: left-top //* 變更視角

# animation
animation: KeyFrameName duration timeFunc repeat
```scss
animation: snow 10s linear infinite
@keyframes snow{
    0%{}
    50%{}
    100%{}
}
```

# SVG animation
