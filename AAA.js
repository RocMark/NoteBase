let arr = [1, 2, 3]

let totalNum = arr
    .reduce((sum, elem) => {
        console.log(`Sum is ${sum}`)
        console.log(`Elem is ${elem}`)
        return sum + elem
    }, 0)

console.log(totalNum) // 6  
