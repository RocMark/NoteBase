//* Video &　Audio Sample

//! 注意瀏覽器不見得支援各種格式的影片
//* 影片 webm 格式最通用
//* 音檔 ogg Vorbis (壓縮過比mp3小)

```pug
//! autoplay 要考慮 mobile流量問題!!
//? preload 於 手機瀏覽器無用 (按開始播放前即進行下載動作，PC實用)
video(autoplay preload="auto/none")
video(src="url" muted loop controls)

//* 按下播放前的預覽圖 必須無autoplay
video(poster="預覽圖" controls)

//- 按Tab會跳至影片可以用鍵盤控制 space bar暫停
video(tabindex="0")

//! 另一種寫法多個來源/格式用 (實用)
//* mp4 不行就會採用webm
video(controls)
    source(src="video/vd.mp4")
    source(src="video/vd.webm")
```
# Audio Sample
```pug
audio(src="audio/ad.mp3" controls)
audio(controls)
    source(src="audio/ad.ogg")
    source(src="audio/ad.mp3")
```

