## 前言
作為熟悉 SQL 操作的練習，
有些程式碼會與內文不同，修正標點符號、大小寫
並將寫法改成 MySQL 的語法
使用 XAMPP phpMyAdmin 作為練習平台
- [表單建立 & 練習資料的 SQL 語法在此](https://gist.github.com/RocMark/cb24e9e86b972c38cb154eecda86b0dd)
- [題目出處](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/411363/)

## Tips
- 外來鍵要與原資料表主鍵比對


## 待完成
6. 11. 14.(答案沒得跑)

## 該複習的題目
7. 10. 14. 15.




## 1.查詢學生表前 10 條資料
```sql
  -- LIMIT 不用等號
  SELECT * FROM `student` LIMIT 10;
```
## 2.查詢成績表中的 最低分、平均分、總分
```sql
  SELECT MIN(`score`), SUM(`score`), AVG(`score`) FROM sc;
```
## 3.查詢老師 "諶燕" 所帶的課程設數量
- 目標 TABLE: course，諶燕 id 為 t002 
```sql
  SELECT COUNT(`tno`) FROM `course` WHERE `tno`='t002'
```
## 4.查詢所有老師所帶 的課程 數量
```sql
  SELECT `tno`, COUNT(`tno`) FROM `course` GROUP BY `tno`;
```
## 5.查詢姓 "張" 的學生名單
```sql
  -- sname 為 學生名稱
  SELECT * FROM `student` WHERE `sname` LIKE '張%';
```

## 6.查詢課程名稱為"SSH",且分數低於 60 的學生姓名和分數
```sql
  ///////////////////////////////////////////////
```

## 7.查詢所有學生的選課情況
- 目標資料: 學生編號、學生名、課程名
```sql
  -- 原解答
  SELECT st.sno, 
        st.sname, 
        c.cname 
  FROM   student st, -- st 作為縮寫
        sc, 
        course c 
  WHERE  sc.sno = st.sno -- 分數的學生ID 對應 學生ID
  AND sc.cno = c.cno; -- 分數的課程ID 對應 課程ID

  -- MyAns
  SELECT student.sno, student.sname, course.cname 
  FROM   student, sc, course 
  WHERE  sc.sno = student.sno 
  AND sc.cno = course.cno;
```
## 8.查詢任一門課程成績在 70 分以上的姓名.課程名稱和分數;
- 目標資料: 學生姓名、課程名稱、分數
```sql
  SELECT student.sname,course.cname,sc.score
  FROM student,course,sc
  WHERE sc.score > 70
  AND sc.sno = student.sno
  AND sc.cno = course.cno
```
## 9.查詢不及格的課程,並按課程號從大到小排列
- 目標資料: 課程編號、課程名稱、學生姓名、分數
```sql
  SELECT course.cno,course.cname,student.sname,sc.score
  FROM course,student,sc
  WHERE sc.score > 60
  AND sc.sno = student.sno
  AND sc.cno = course.cno
  ORDER BY sc.score DESC
```
## 10.查詢沒學過 "諶燕"(t002) 老師講授的任一門課程的學生姓名
- 目標資料: 學生姓名
- c001,c002,c007,c010 為 t002 開的課
- c003,c004,c005,c006,c008,c009 非其開的課
```sql
  -- 原始解答
  SELECT
    st.sname
  FROM
    student st
  WHERE
    -- 找出 非由 諶燕 講授的學生代號
    st.sno NOT IN(
    -- 此段 找出 分數表中 由 諶燕 講授的課程 的 學生代號
    SELECT DISTINCT sc.sno
    FROM sc, course c, teacher t
    WHERE sc.cno = c.cno AND c.tno = t.tno AND t.tname = '諶燕'
  );
```
```sql
  -- MyAns

  -- 4. 排除下3.的學生ID 並取得 姓名
  SELECT sname FROM student
  WHERE `sno` NOT IN (
    -- 3. 找出 分數表中 由 諶燕 講授的課程 的 學生代號
    SELECT DISTINCT sno FROM sc
    WHERE `cno` IN (
      -- 2. 取得 諶燕 講授的課程 的 ID
      SELECT cno FROM course
      WHERE `tno` = (
        -- 1. 取得 諶燕 老師的 ID
        SELECT tno FROM teacher WHERE tname = '諶燕'
      )
    )
  )
```

## 11.查詢兩門以上不及格課程的同學的學號及其平均成績
> ...原始資料給就只有一個傢伙 一門不及格而已 (結果無)


## 12.檢索'c002'課程分數大於80,按分數降序排列的同學學號
- 稍為修改一下題目 (原始題目 c004 沒人修這門課...)
```sql
  SELECT sno, score FROM sc
  WHERE sc.cno = 'c002' AND sc.score > 80 
  ORDER BY `score` DESC
```
## 13.刪除 's002' 同學的 'c001' 課程的成績
```sql
  DELETE FROM `sc`
  WHERE `sno` = 's002' AND `cno` = 'c001';

  -- 補救回來
  INSERT INTO sc VALUES ("s002","c001",80.9);

  -- 將該筆資料改成 NULL
  UPDATE `sc` SET `score`=NULL
  WHERE `sno` = 's002' AND `cno` = 'c001';
```
## 14.查詢 'c001'課程比'c002'課程成績高的所有學生的學號
- 答案無法用 待解....
```sql
  -- 找出 c001 的課程 作為 a
  SELECT a.* FROM (SELECT * FROM sc WHERE a.cno='c001') a,
  -- 找出 c002 的課程 作為 b
  (SELECT * FROM sc WHERE b.cno='c002') b 
  -- 再進行兩個結果的比較
  WHERE a.sno=b.sno AND a.score > b.score
```

## 15.查詢平均成績大於 60 分的同學的學號和平均成績
```sql
  -- 單人平均計算
  SELECT sno, AVG(`score`) FROM sc WHERE `sno`='s001'

  -- 解
  SELECT sno, AVG(`score`) FROM sc
  GROUP BY `sno`
  HAVING AVG(`score`) > 60
```
## 16.查詢所有同學的學號.姓名.選課數.總成績
- 目標資料: 
```sql
  SELECT student.sname,a.*
  FROM student,(SELECT sno,COUNT(cno),SUM(score) FROM sc GROUP BY sno) a
  WHERE a.sno = student.sno

  -- 統計分數表中的學生
  SELECT sno,COUNT(cno),SUM(score) FROM sc 
  GROUP BY sno
```
## 17.查詢姓 '劉' 的老師的個數
- 目標資料: 
```sql

```
## 18.查詢沒學過 '諶燕' 老師課的同學的學號.姓名
- 目標資料: 
```sql

```
##
- 目標資料: 
```sql

```
##
- 目標資料: 
```sql

```
##
- 目標資料: 
```sql

```
##
- 目標資料: 
```sql

```