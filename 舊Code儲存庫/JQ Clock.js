//! Browser 卡頓會使 setInterval 不正確
//* How???? 應該使用 getMilliseconds去檢測是否正確
function showTime() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ms = date.getMilliseconds()

    let session = 'AM'
    if (h === 0) { h = 12 }
    if (h > 12) {
        h -= 12
        session = 'PM'
    }
    h = (h < 10) ? `0${h}` : h
    m = (m < 10) ? `0${m}` : m
    s = (s < 10) ? `0${s}` : s
    let time = `${session}   ${h}:${m}:${s}`
    console.log(time)
}
showTime()
setInterval(showTime, 1000)
clearInterval(showTime)
