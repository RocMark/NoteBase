# Input Type 種類
> email / url / tel / search
> color(支援度要查)



# Input Pattern
> 待補完

# Input SetUp
```pug
form(action="")
    //- number可用鍵盤上下控制
    input(type="number", min="10", step="2", value="10") 
    input(type="range", min="0" value="100")
    input(type="date" value="" min="最晚的日期")
```
