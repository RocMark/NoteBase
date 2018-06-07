# jQ 源碼 DOM選取 & 遍歷

//! jQuery 所有 '操作' 功能都是對多個對象執行
Ex: next, parent, css....etc

# 選擇器比較
* doqs 是選到第一個東西
* doqsAll 回傳 NodeList

* $('li')
```js
  // jQuery.fn.init 為 jQuery的初始化 Function
  $('li')
  jQuery.fn.init[li,li,li,prevObject: jQuery.fn.init(1)]
  0: li.active  (dom)
  1: li
  2: li
  length: 1
  prevObject: 表parent是誰 // 待重看!!
```

## 預設參數
傳入 undefined 會使用 預設參數
* 傳入 null 則輸出為 null
```js
  function test123(num = '123') { 
    console.log(num) // null 
  }
  test123(null)
```

## 選取器比較
$('')  & doqsAll 都會產生 新的物件
doqs 則會回傳 DOM
```js
  // $() 會產生新的物件
  $('li') === $('li') // false 
  // doqs 會指向 DOM  // true
  document.querySelector('li') === document.querySelector('li')
  // 會產生新物件 // false
  document.querySelectorAll('li') === document.querySelectorAll('li')
```

## eq vs $('li')[0]
```js
  $('li').eq(0)　// 照你選出的東西的第N個
  // 回應給 jQuery 物件，才可以用 jQuery方法
  $('li')[0]
  // 對應到原生的 DOM
  $('li').get(0)
  // 對應到原生的 DOM，可以轉成純陣列
```

## jQuery Dom 選取
* parent
對應 parentNode
* parents('.aaa')
回傳所有有包到 target的人
> 回傳包到我的 .aaa
* parentsUntil('.aaa','ul')
> 直到 .aaa 為止 包住 target 的 ul // 較少用
* next / prev
若選取多個li => next()，會將每個 li 的next()選取起來
* nextAll / prevAll
前後面的全部
* nextUntil('li:last-child') / prevUntil('li:first-child')
本身不算，走到最後一個li之前 (用來取一個範圍)
* siblings [同層的]
nextElementSibling / previousElementSibling
* find('ul')
find 等同於 css 中的空白鍵  [每層都找]
* children('ul')
children 等同於 css 中的 > [僅直屬的]
對應 JS中的 .children

* end

## nodeType
> https://goo.gl/JEba9n
1. Tag
3. textNode
7. XML Document (少用)
8. CommentNode 註解
9. Document
10. DocumentTypeNode
11. DocumentFragment

## jQuery 選取器 原始碼
* 非常長使用 nodeType 去判斷目前的位置

* $('<div></div>')  
等同於 JS createElement // 2924行

DOM 選取由
dir / sibling / siblings 方法實做
```js
	parents: function( elem ) {
		return dir( elem, "parentNode" );
  },
  next: function( elem ) {
		return sibling( elem, "nextSibling" );
  },
  siblings: function( elem ) {
    // 傳入 母的第一個子 (先出去外，往後抓)

    // || {} 避免 elem.parentNode 變成 undefined
    // 再進行 .firstChild 時會噴錯 !!
    // 當 elem.parentNode = undefined 時改用 {}
    // 即不會噴錯
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
```

```js
  // 不是9Document時，就繼續查詢，是則停止
  var dir = function( elem, dir, until ) {
    var matched = [],
      truncate = until !== undefined;
    while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
      if ( elem.nodeType === 1 ) {
        if ( truncate && jQuery( elem ).is( until ) ) {
          break;
        }
        matched.push( elem );
      }
    }
    return matched;
  };

  function sibling( cur, dir ) {
    while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
    return cur;
  }

  var siblings = function( n, elem ) {
    var matched = [];
    // 下補充
    
    for ( ; n; n = n.nextSibling ) {
      // 該拿到的是 tag 且不是等於傳入的本身就加入結果
      if ( n.nodeType === 1 && n !== elem ) {
        matched.push( n );
      }
    }
    return matched;
  };
```

* for(宣告;條件;改變條件){}
```js
  // for 的宣告可以往外面拉出來
  // 中間 n 代表判斷 是否存在 
  // n.nextSibling 一直往外直到 window外會變成 null
  // 當 n 符合時，直行code，後 n = n.nextSibling
  for (; n; n = n.nextSibling) {
    if (n.nodeType === 1 && n !== elem) {
      matched.push(n)
    }
  }

  let index = 0
  for (;index < 5; index += 1) {
  }
```