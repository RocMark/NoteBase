# Pagination建立筆記

> Pre 1  2  3 Next 

# //! 待與pushState 結合

# 預置物件
> ArtField (產生文章區)
> PageNavNext / PageNavPre / Page1Btn

# 首頁 (init render 文章 & PageNav)
> JSON Loop 建立文章列表同時，得到 artList長度
//* Note 頁數只有1時，記得隱藏 NextBtn

```js
//? 判斷式 每頁 5文章 (ceil 無條件進位)
let pageCount = artCount < 5 ? 1 : Math.ceil(artCount / 5)

// 取得 page頁數後 Loop 創造 PageNav
for (let i = 1; i < pageCount; i += 1){ /* 建立pageNav  */ }
// 插在預置物件後面
Page1Btn.after(htmlString)
```


#
