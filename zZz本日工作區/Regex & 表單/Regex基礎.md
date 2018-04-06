# Regular Expressions 正規表示法
> https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD

# 練習工具
> 記得選擇 JS
> https://regexr.com/
> https://regex101.com/

//! 切記 範圍是 {2,8} (逗號正確)   {2-8}錯誤!!!!

# 自我test表
各自功能為  '.'  '?'  '*'  '+' '|' '^' '$' '\'
'()' '[]' '{}' '-'

# 速查Note
[^pe] //!除外字元

\d \w \s \t \S
'.' 表任何字元 //*除了換行
'?' 前者可有可無

'+' 表 1-more
'*' 表 0-more
'|' or

'^''$' 始末

# 基本架構
/ insert regex here  / /foo/
> 需被包裹於兩個斜線
> 僅會回傳首個符合的單字
//* Global Flag 開啟，會將所有符合的找出

# Character Sets
[ngz]inja //* 於中括號內寫入可接受的字元
> ninja ninja ginja zinja (all match)
> nginja 僅會match後半的 ginja

[abc123]000
//! 注意 [] 只表示一個字元，還需符合其他的部分
> ab3e 皆不會符合

//!除外字元 [^pe]
[^pe]000 
> a000 c000 2000  (O)
> e000 p000 (X)

# Ranges
[a-zA-Z]inja [5-9]inja
> Ginja ninja (O)
//?　可以包含兩種range

# Repeating Characters
[0-9]{11}
//* 定需要的字數

[a-z]{3,5}
//! 注意順序 3<5 相反則出錯
//? 表 a-z 3個字~5個字  { 範圍 }
//* 可以用於帳號長度限制


[a-z]{3,}
//! 至少大於3個字元的寫法

////[0-9]+ 不佳
//// 加號表 0~無限個重複只要有符合

# Metacharacters
//* 完整表
> https://www.w3schools.com/jsref/jsref_obj_regexp.asp

//* 注意 \ 表示 Metacharacters
> d 表 字元d   \d 表 [0-9]

-\d 等同於 [0-9]  //* digital number
-\w 等同於 [a-z A-Z 0-9 _] //* word
> !@#$%^&* .... 皆不符合

-\s 表空白 (spaces,tab) //* space & tab
-\t 表tab only //* tab

# Special Characters 特殊字元

'\' 跳脫字元(Metacharacters用)
//! 如果要使用 * ? 特殊字元
> abc\* abc\?
> abc* (o) abc? (o)

'[]' 表 character set
'[^]' 表 negate character set (除外用)

'?' 表 前方的一個字元 可有可無
//* hello?
> hell hello  (o)

'.' 表任何字元 //! 除了換行符號
//* car.  .也代表一個字元不可少
> car (x) card cart (o)

'+' [0-9]+  表 1-more
'*' [0-9]*  表 0-more

# .+ 表多於1個的任何字元
//* 可以用於 input 被輸入時

# 限定字元數 (Starting & Ending Patterns)
why? [a-z]{5}
> 會造成 helloaddjojdopajopdajop 有多個符合
> 必須要設定結束點

^[a-z]{5}$
//*  '^' 表起始符號
//!  '$' 表結束符號
//?  合併使用只有剛好5個字元才會符合

^[a-z]{5}
//* 只選取首5個字作符合
[a-z]{5}$
//* 只選擇末5個字作符合

# 選項字元 Alternate Characters
> p|t|c 
//* 表此"單一字元"為 p,t,c 皆會符合

> p|tyre
> pyre (x) tyre (o)

若要達到 pyre符合?
> 法1:  pyre | tyre

> 法2:  (pet|toy|crazy) rabbit
//!   () 可以使其跟其他部分 當作分開的個體作判斷

//* abc\(\)  => abc() 一樣需要跳脫字元

> 延伸  (pet|toy|crazy)? rabbit
> pet rabbit (o)
> toy rabbit (o)
>  rabbit (o)

# 範圍用法實例
[a-z\d]
[@-.^$+]
[\?]  //* 特殊用途字元需要跳脫字元