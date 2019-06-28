# Timestamp (預設值、字動更新)
設定 timestamp 資料類型

# Timestamp 兩種屬性
- 自動初始化: 資料寫入欄位，自動填入當下時間
(DEFAULT CURRENT_TIMESTAMP)
- 自動更新: 修改資料，自動填入當下時間覆蓋
(ON UPDATE CURRENT_TIMESTAMP)

# Timestamp 四種 設法/時機:
- 自動初始化 及 自動更新 (預設)
```sql
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
```
- 只做自動初始化 (建立時初始化, 更新時不修改時間)
```sql
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```
- 只做自動更新 (建立時不做初始化動作)
```sql
  ts TIMESTAMP DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP
```
- 全都不做(直接用 DATETIME 的型態 似乎比較方便?)
```sql
  ts TIMESTAMP DEFAULT 0
```

# 參考資料
[作者:Tsung - MySQL Timestamp](https://blog.longwin.com.tw/2007/10/mysql_timestamp_properties_2007/)