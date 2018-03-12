# JS應用大全整理

# Form表單篇

# 文字過濾篇
//* 基本都需要正規表示法 
//? replace() 方法

- 去除空白
- 限定中字only


- input reset 清空表單用

# 禁止 copy & paste


# Form hint
> LV1 提示validation
> LV2 提示可還需輸入N個字
> LV3 提示還需輸入多少 英字 / 數字


# disabled VS readonly 
ReadOnly 指對 input(text/password) textarea 有用
使用此表單提交 會將值傳出去

Disabled 對表單元素都有效
使用此表單提交不會將值傳出去

# disable 活用
- User 點下 Submit後， JS 將SubmitBtn disabled掉，避免在網路差的地方重複性輸入

- 該條件滿足移除 disable，再次可更修改


# type:hidden
用於不給修改但仍需要提交的表單資訊

# autocomplete="off"
自動輸入用於
