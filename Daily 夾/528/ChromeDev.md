# ChromeDev Crash
> https://goo.gl/1vqovi

# element 篇
:hov 可設狀態
.cls 可增刪改 class
Filter 可快速查詢屬性
DOM Tree 可用拖拉的方式改變 DOM的位置


# Block URL
模擬 cdn 壞掉、連結失效
NetWork / 右鍵 Block request URL
點擊導覽的加號，可以輸入檔案的類型
Ex: *.css 

# 模擬低階手機
進入 RWD頁面 100% Online(點此下拉選單)
Low-end mobile / Offline
* Performance Tab
點選右上齒輪，可以模擬網路速度 & CPU 快慢程度

# 編輯源代碼
更改 DOM Tree 需要再 Source Tab
1. Source / FileSystem (左)
2. 將 資料夾拉入
3. CSS 即可於 elements tab 改寫

# 查看元素改變
1. 選擇元素
2. Elements、點擊左邊的小藍點
3. Break on  attribute modifications

## BlackBox (chrome 66)
用 框架時，設置 Break Point 會導向框架原始碼(不怎有用)
```
  1. 設置 EvtListener BP  mouse/click
  2. 點擊按鈕觸發
  3. Call Stack 會有該 Function位置
  4. 右建該 Function => BlackBox script
  5. Resume & 再次點擊 BTN
  6. 就可以導向 該 component 的位置了
```
## Local Overrides JS [未成功]
* 需要讓 JS 先於 page loads
* manifest.json
run_at to document_start.
C:\Users\username\AppData\Local\Google\Chrome\
* content script
加入 <script>

## Local Overrides css  (chrome 65)
儲存 用 devTools 改變 網頁的元素樣式
* 無法改 element.style & DOM Tree
```
  1. Source / Overrides(左上tab)
  2. 選擇儲存處
  3. 修改樣式 => reload
  4. 按下 F12 即可套用上次修改的樣式

  Make your changes. After you add a folder you can switch to the network tab and right click on any file and select “Save for overrides”. I have already overridden scripts.js so it shows with a “blue dot”.
```

## Accessibility Tab (chrome 65)
點擊元素、Accessibility Tree
可以看階層 & aria attribute

## Audits SEO Tab  (chrome 65)
* 18/7月起 會將 PageSpeed 納入 SEO 排行

## Performance
可以 record 多段操作，會分析
* JS 執行時間
* Rendering / Painting

## Performance Monitor
Ctrl+Shift+P performance monitor
可以查看當前 CPU 用量、 JS記憶體占用
Frame 是 DOM Frames
* 要查看 FPS 可用 
Ctrl+Shift+P FPS meter

# Debugging JS
Source Tab
Call Stack / Scope / Break Point
* DOM Breakpoints
* DOM Change Breakpoints

## Event Listener Breakpoints [重要好用]
1. 點擊想要偵測的事件 mouse / click
2. 點擊按鈕
3. 會顯示該行 Code 位置
如果那行非你要的 按上方的 箭頭
4. Resume script execution
5. 或是按上下按鈕 執行下一行 Code