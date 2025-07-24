class Vehicle {
  protected speed: number = 0;
  
  protected accelerate(amount: number) {
    this.speed += amount;
  }
  
  public getSpeed() {
    return this.speed;
  }
}


class Car extends Vehicle {
  public drive() {
    this.accelerate(10);  // Can access protected member from subclass
    console.log(`Driving at ${this.speed} km/h`);
  }
}

const car = new Car();
car.drive();              // Works
         // Accessibl
 




