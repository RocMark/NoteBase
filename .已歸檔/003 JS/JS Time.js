// Time 用法
// ? https://www.youtube.com/watch?v=pCvdK-0kHB0

//! JS Core

const time = new Date()
// 2018-02-21T12:07:55.513Z
console.log(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
// 10:02 PM
console.log(time.toLocaleString())
// 2018/2/18 下午10:03:58
console.log(time.toDateString())
// Sun Feb 18 2018
console.log(time.toLocaleDateString())
// 2018/2/18

console.log(time.toGMTString()) 
console.log(time.toUTCString())
// Sun, 18 Feb 2018 14:01:05 GMT  [Same]

console.log(time.toISOString())
// 2018-02-18T14:02:52.789Z 同 toJSON()


//* 自寫
function getTime(pattern) {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const date = currentDate.getDate()
    let hour = currentDate.getHours()
    let min = currentDate.getMinutes()
    const sec = currentDate.getSeconds()
    let targetTime = ''
    if (pattern === 'YMD') {
        const YMD = `${year} / ${month} / ${date}`
        targetTime = YMD
    } else {
        //* if(hour >= 12 ) true:pm false:am
        const ampm = hour >= 12 ? 'pm' : 'am'
        hour %= 12
        hour = hour || 12 // 當餘0時 0應該為12
        min = min < 10 ? `0${min}` : min
        const AMPM = `${hour}:${min} ${ampm}`
        targetTime = AMPM
    }
    return targetTime
}

console.log(getTime())

