//* JS Constructor

let Car = function (maxSpeed, driver) {
    this.maxSpeed = maxSpeed
    this.driver = driver
    this.logDriver = function () {
        console.log(this.driver)
    }
    this.drive = function (speed, time) {
        console.log(speed * time)
    }
}

let myCar = new Car(70, 'Tom')
let myCar2 = new Car(120, 'Mark')
let myCar3 = new Car(80, 'Tim')

myCar.drive(30, 5)
console.log(myCar2.maxSpeed)
myCar3.logDriver()
