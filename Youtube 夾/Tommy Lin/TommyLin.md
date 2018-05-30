# Tommy Lin

# 前端踩雷日記 (css選取器 以數字開頭)
> https://goo.gl/XkPZmv
解決法
1. 以 屬性選擇器取代 [id="360box"]
2. unicode解法 前加 /3首個數字後加空白
/33 60box

3. div.www.abc.com (解決用class中有用.)
.www\.abc\.com  使用跳脫字元即可
