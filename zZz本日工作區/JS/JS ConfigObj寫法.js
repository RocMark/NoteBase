/**
 * 此種寫法可以達容易修改相關配置 & 自由訂製
 * Config內容: Tags / CSS Class / DOM
 */



let carousel = (function () {
    let config = {
        CSS: {
            classes: {
                current: 'current',
                scrollContainer: 'scroll',
            },
            IDs: {
                maincontainer: 'carousel',
            },
        },
        labels: {
            previous: 'back',
            next: 'next',
            auto: 'play',
        },
        settings: {
            amount: 5,
            skin: 'blue',
            autoplay: false,
        },
    }
    function init() {
    }
    function scroll() {
    }
    function highlight() {
    }
    return { config, init }
}())
