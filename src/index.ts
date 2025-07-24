interface Vehicle {
  make: string;
  startEngine(): void;
  stopEngine(): void;
  getFuelLevel?(): number; // Optional method
}

interface Electric {
  readonly batteryLevel: number; // Readonly property
  charge(minutes: number): void;
  getEstimatedRange(): number;
}

class ElectricCar implements Vehicle, Electric {
  // Using parameter properties shorthand
  constructor(
    public readonly make: string, 
    private model: string,
    public batteryLevel: number = 100
  ) {}

  // Private method for internal use
  private logActivity(action: string): void {
    console.log(`${this.make} ${this.model}: ${action}`);
  }

  // Interface method implementation
  startEngine(): void {
    this.logActivity("Electric motor started");
  }

  // Interface method implementation
  stopEngine(): void {
    this.logActivity("Electric motor stopped");
  }

  // Interface method with parameter
  charge(minutes: number): void {
    const chargeAmount = minutes * 0.5;
    this.batteryLevel = Math.min(100, this.batteryLevel + chargeAmount);
    this.logActivity(`Charged for ${minutes} minutes. Battery now at ${this.batteryLevel}%`);
  }

  // Additional method not in interfaces
  getEstimatedRange(): number {
    return this.batteryLevel * 5; // Assuming 5 miles per percent
  }

  // Getter for private property
  get fullName(): string {
    return `${this.make} ${this.model}`;
  }

  // Static method
  static createTesla(model: string): ElectricCar {
    return new ElectricCar("Tesla", model);
  }
}

// Usage examples
const myCar = new ElectricCar("Tesla", "Model 3", 75);
myCar.startEngine();  // "Tesla Model 3: Electric motor started"
myCar.charge(30);     // "Tesla Model 3: Charged for 30 minutes. Battery now at 90%"
console.log(myCar.getEstimatedRange()); // 450
console.log(myCar.fullName); // "Tesla Model 3"

const tesla = ElectricCar.createTesla("Model S");
