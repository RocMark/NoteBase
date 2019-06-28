## Index (待查)
- Index 用於 column、table 用來加速 query 查詢
- [參考資料](https://www.1keydata.com/tw/sql/sql-create-index.html)
```sql
  CREATE INDEX LIndex ON users(name);
  DROP INDEX LIndex ON users;
```
## truncate  (待查)

# UNION (合併兩個欄位) [待補充]
- 兩個欄位必須有相同數量、相同資料類型
```sql
SELECT `student_name` AS UNION_ROW
FROM `student`
UNION
SELECT `teacher_name`
FROM `teacher`;
```

# ER Diagrams 介紹 (3:42:13)
> Entity Relationship Diagrams
> https://www.youtube.com/watch?v=HXV3zeQKqGY

# Entity Relationship Diagrams