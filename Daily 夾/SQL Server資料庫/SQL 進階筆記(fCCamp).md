# FreeCodeCamp SQL (進階筆記)
[freeCodeCamp 4Hour Free課程](https://www.youtube.com/watch?v=HXV3zeQKqGY)

## HAVING (函數條件)
- SUM() 之外函數產生的結果，無法用於 WHERE
- 但可以使用 HAVING 作判斷
```sql
  SELECT Store_Name, SUM(Sales) 
  FROM Store_Information 
  GROUP BY Store_Name
  HAVING SUM(Sales) > 1500;
```

## COUNT
- 用於計算欄位筆數
- 常與 DISTINCT 合用，目的在於找出不同的資料
```sql
  -- 找該 Store_Name 非空白資料的欄位筆數
  SELECT COUNT (Store_Name) 
  FROM Store_Information 
  WHERE Store_Name IS NOT NULL;

  -- 找出不重複的資料
  SELECT COUNT (DISTINCT Store_Name) 
  FROM Store_Information;
```

## FROM 可用 SELECT 過的資料
- FROM SELECT 過的資料 當成資料來源
- 還可將該 SELECT 後的資料 當成結果欄位
```sql
  SELECT 
    別名.*,
    student.sname
  FROM 
    student,
    -- 
    (SELECT sno,COUNT(cno),SUM(score) FROM sc GROUP BY sno) 別名
  WHERE 別名.sno = student.sno
```

# SQL 比較時間
- 以 'YYYY-MM-DD' 形式互相比較
- 利用 Like 來判斷月份 (時間格式統一)
```sql
  SELECT * FROM `users`
  WHERE birth_data > '1970-01-01'

  -- 利用 Like 來判斷月份
  SELECT * FROM `users`
  -- 一個下底線就表一個字元, % 代表任意內容
  WHERE birth_data LIKE '____-11%'
```

# NESTED Query
- [NESTED Query 講解 3:12:25](https://www.youtube.com/watch?v=HXV3zeQKqGY)
- SQL 會先執行 () 內的 Query 再執行外層
- IN () 之內可以有多個變數
- =  () 則回傳結果只能有一個 否則會出錯
- 可利用 LIMIT 1 來確保結果只有一個
```sql
  -- 找出員工姓名，誰向客戶出售 > 30,000

  -- 2. 再利用 IN 將該 ID 當搜尋條件
  SELECT employee.first_name, employee.last_name
  FROM employee
  WHERE employee.emp_Id IN (
    -- 1. 先找出總銷售額大於 30,000
    SELECT emp_id
    FROM works_with
    WHERE works_with.total_sales > 30000
  );
```
```sql
  SELECT client.client_name
  FROM client
  WHERE client.branch_id = (
    SELECT branch.branch_id
    FROM branch
    WHERE branch.mgr_id = 102;
    LIMIT 1  -- 確保他只回傳一個
  )
```

# ON DELETE SET NULL / CASCADE
- [ON DELETE 講解 3:22:00](https://www.youtube.com/watch?v=HXV3zeQKqGY)
- ON DELETE 當關聯資料被刪除時，該外來鍵欄位該如何處理
- ON DELETE SET NULL 將該欄位設為空值 (用於該欄位為外來鍵)
- ON DELETE CASCADE 將該筆資料刪除 (用來該欄位為主鍵)
```sql
  CREATE TABLE branch (
    branch_id INT PRIMARY KEY,
    branch_name VARCHAR(40),
    mgr_id INT,
    mgr_start_date DATE,
    -- 如果 emp_id 被刪除 會將 mgr_id(外來鍵) 欄位設為 NULL
    FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
  );
```

# Triggers 偵測器 (3:30:00)
> https://www.youtube.com/watch?v=HXV3zeQKqGY
- 可用於當資料被建立、刪除、更新時作相對應的動作
* 盡量少使用觸發器，不建議使用 [延伸閱讀](https://www.itread01.com/articles/1494160683.html)