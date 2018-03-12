# Hexo scaffolds 篇

//* Post Md 預設 metadata (yaml)
//! 注意draft 並沒有時間 meta
//? page 並沒有Tag meta
=> Why!?
上述無meta tag可以由 //! scaffolds控制

//* 注意修改scaffolds 並不會將屬性新增至舊有的文章
```yaml
---
title: testDraft
date: 2018-02-18 00:08:26
tags: [Tag1, Tag2, Tag3]
author: RocMark [新增的]
---

Default Content 
//! 可以用於文章最下面版權宣告之類的!
```

# 製作 custom layout
在 scaffolds 建立 草稿名.md
hexo new 草稿名 專案名
```yaml
---
title: {{ title }}
date: {{ date }}
tags:
author: RocMark
layout: {{ layout }}
---
```