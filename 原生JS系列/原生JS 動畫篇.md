# 原生JS 動畫篇

# 動畫篇

//? window.requestAnimationFrame()
```js
    const start = window.performance.now()
    const duration = 2000

    window.requestAnimationFrame(function fadeIn (now) {
        const progress = now - start
        oneElement.style.opacity = progress / duration
        if (progress < duration) {
        window.requestAnimationFrame(fadeIn)
        }
    }
```