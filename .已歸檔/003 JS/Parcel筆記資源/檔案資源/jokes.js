export const jokes = {
    getOne: function () {
        return new Promise((resolve, reject) => {
            fetch('http://api.icndb.com/jokes/random')
            .then(res => res.json())
            .then(data => {
                // 回傳 undefined 因為非同步的關係
                // 可以使用 promise解決
                console.log(data)
                resolve(data.value.joke)
            })
        })
    }
}