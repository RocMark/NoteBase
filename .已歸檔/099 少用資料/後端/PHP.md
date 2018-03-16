# PHP

## 待整理
path ?????? 查  
secure 查
set /php/ 則??

* PHP可以包html tag
* 註解 // 或 /**/
* 區分大小寫

// ? PHP Scope / 前置後置 複習
```PHP
$old='123'
function getAge(){
$age="456"
echo $age (可成功)
echo $old (失敗)
}
getAge();
//! Error:Undefined variable:old
```

```php
$name='David';
function getAge(){
	global $name; //* 用來取得global variable用
	echo $name;
}
getName();   //* 成功
// * 也可以用使用 $GLOBALS['name']
```

```php
$people = array("David"=>""27)
$people['David'="27";
while () {}
$people = array(
	'online'=>array('David','Amy')
	'offline'=>array('Mark','Tom')
)
echo $people ['online'] [1] //Amy
```

# foreach
```
foreach 只用於Array [查詳細]
foreach( array名 as $value ){code}
foreach( array名 as $key=>$value ) {code}
```

```php
$names = array ("Jonn","David","Amy")
foreach($names as $name) {echo $name;} //* John David Amy
```

// * include / require [差異在 require為必要的,缺則error]
* //! include 'ipconfig.php';

// ? SuperGlobal PHP事先定義的函數
```php
$_SERVER , $_GLOBALS , $_REQUEST , $_POST , 
$_GET , $_FILES , $_ENV , $_COOKIE , $_SESSION
$_SERVER ['HTTP_HOST'] (Variables 再看)
```

$_SERVER ['  有很多方法可以用  ']  //查

<form action="test.php" method="post"> input*n </form>
$_GET : 資料可視 , 資料數量有限制 
$_POST : 不可視 , 無限制

//! $_SESSION 關閉瀏覽器消失
```php
session_start();  //要使用必加
$_SESSION['color']="red"
session_unset(), 
session_destroy()  //* 刪除SESSION
```

$_COOKIE   //* 存於User PC
set cookie 必須放在html前 出現
```php
name必要 其他optional
setcookie (name, value , expire , path , domain , secure, httponly)
expire  [default 0]
time()+86400*30   [30天失效 數字串秒為單位]
```

```php
httponly  [default: false] [用於安全性]
若設true => 只有通過HTTP協定才可以使用COOKIE
Scripting languages 不可使用
```

```php
$value="John";
setcookie("user, $value,time()+86400*30),'/');
if(isset($_COOKIE['user']))
{echo "value is:".$COOKIE['user'] };
//John
```





















