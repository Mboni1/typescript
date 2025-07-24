"use strict";
class ElectricCar {
    constructor(make, model, batteryLevel = 100) {
        this.make = make;
        this.model = model;
        this.batteryLevel = batteryLevel;
    }
    logActivity(action) {
        console.log(`${this.make} ${this.model}: ${action}`);
    }
    startEngine() {
        this.logActivity("Electric motor started");
    }
    stopEngine() {
        this.logActivity("Electric motor stopped");
    }
    charge(minutes) {
        const chargeAmount = minutes * 0.5;
        this.batteryLevel = Math.min(100, this.batteryLevel + chargeAmount);
        this.logActivity(`Charged for ${minutes} minutes. Battery now at ${this.batteryLevel}%`);
    }
    getEstimatedRange() {
        return this.batteryLevel * 5;
    }
    get fullName() {
        return `${this.make} ${this.model}`;
    }
    static createTesla(model) {
        return new ElectricCar("Tesla", model);
    }
}
const myCar = new ElectricCar("Tesla", "Model 3", 75);
myCar.startEngine();
myCar.charge(30);
console.log(myCar.getEstimatedRange());
console.log(myCar.fullName);
const tesla = ElectricCar.createTesla("Model S");
//# sourceMappingURL=index.js.map