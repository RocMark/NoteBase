//* 

let testArr = ['box1', 'box2', 'box3']
let testJSON = [
    {
        name: 'box1',
        price: 100,
    }, {
        name: 'box2',
        price: 200,
    }, {
        name: 'box3',
        price: 300,
    },
]

for( var i = 0; i < 5; i++ ) {
    (function(x){
      // 將原本的 1000 改成 1000 * x
        setTimeout(function() {
        console.log(x);
      }, 1000 * x);
    })(i);
}

for (let i = 0; i < 5; i += 1) {
    setTimeout(() => {
        console.log(i)        
    }, 1000 * i);
}