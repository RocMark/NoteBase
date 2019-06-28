# phpMyAdmin 建立表單
- 左邊新增資料庫
- 新增資料表 (Table)
- 選擇資料類型 (INT, VARCHAR)
- 設定主Key (索引)
- ID 設成 AutoIncrement (A.I.)

# phpMyAdmin 注意事項
* 中文欄位必須設成 utf8 或是 utf8mb4_general

# 噴錯紀錄

# Incorrect column specifier for column 
- AutoIncrement 的欄位必須為 INT 或 浮點數 不可使用 CHAR

# Unknown column '1' in 'where clause'
- (`) 使用於 資料表名、欄位名
- (') 使用於 資料 String
- 數字則可不用 ''

#  Cannot delete or update a parent row: a foreign key constraint fails
- 兩個表互相關聯、刪除表時會噴錯
- [資料來源](https://blog.csdn.net/u010429286/article/details/79042886)
```sql
  -- 設定關閉檢查外來鍵
  SET foreign_key_checks = 0 ;
  DROP TABLE table1;
  -- 刪除表後打開
  SET foreign_key_checks = 1 ;
```