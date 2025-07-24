"use strict";
class Vehicle {
    constructor() {
        this.speed = 0;
    }
    accelerate(amount) {
        this.speed += amount;
    }
    getSpeed() {
        return this.speed;
    }
}
class Car extends Vehicle {
    drive() {
        this.accelerate(10);
        console.log(`Driving at ${this.speed} km/h`);
    }
}
const car = new Car();
car.drive();
//# sourceMappingURL=index.js.map