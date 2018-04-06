function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * ((myMax - myMin))) + myMin
}

console.log(randomRange(5, 6))
//*