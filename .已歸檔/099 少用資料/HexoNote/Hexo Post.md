# Hexo 建立 Post

# hexo new 文章名
會建立一個新的markdown file 於 source / _post / 中
//? Ctrl+p > reload 刷新 VSCode視窗

# hexo new draft testDraft
會建立_draft資料夾 & draft md檔

hexo server --draft //*可以讓伺服器render post &　draft

hexo publish testDraft //* 發布該篇草稿[將draft檔移到post]

#　hexo new page page名 (用於About Page之類)
[創立以page名的資料夾] 
> http://localhost:4000/AboutMe/ 

# Grouping  //! Tags & Categories
> http://localhost:4000/tags/Tag1
> http://localhost:4000/categories/Cat1
```yaml
tags: [Tag1, Tag2, Tag3]
categories:
- [Cat1, Cat1.1]   //! 建立子分類
- [Cat2]
- [Cat3]
```

# Tag PlugIns
> https://hexo.io/zh-tw/docs/tag-plugins.html (待看!)
# 已可用MarkDown語法的整理
Block Quote / Code Block
//! {% youtube video_id %}
img / iframe / gist / jsfiddle [要用在查]
//* Pull Quote ??


