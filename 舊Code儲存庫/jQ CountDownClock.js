// count_down_clock_section

//! 待轉換

function countdown() {
    // Millisecond 兩位數 失敗
    // let now = new Date(millsecConds/dateString/year,month,date,h,m,s,ms)
    let now = new Date()
    // 切記切記切記 javascript 計算月份從0~11會多30天 12/1(填入)=11/1(實)
    let eventDate = new Date(2017, 11, 30, 12, 39, 40)
    
    let currentTiime = now.getTime()
    let eventTime = eventDate.getTime()
    let remTime = eventTime - currentTiime
    // Math.floor 傳回<=輸入參數的最大整數。

    let ms = Math.floor(remTime)
    let s = Math.floor(remTime / 1000)
    let m = Math.floor(s / 60)
    let h = Math.floor(m / 60)
    let d = Math.floor(h / 24)

    h %= 24
    m %= 60
    s %= 60
    ms %= 10
    // if (condition) true : false
    // ? 顯示 單位數時以0X 方式表示
    h = (h < 10) ? `0${h}` : h
    m = (m < 10) ? `0${m}` : m
    s = (s < 10) ? `0${s}` : s
    // ms = (ms < 10) ? "0" + ms : ms;

    //* 判斷是否為0
    if (h >= 0 && m >= 0 && s >= 0 && ms >= 0) {
        console.log(`${d} ${h} ${m} ${s} ${ms}`)
        setTimeout(countdown, 100)
    } else {
        // 顯示 000000 & 特效
    }
}
countdown()
