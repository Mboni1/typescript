

class Person {
  // Properties with type annotations
  name: string;
  age: number;
  
  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  // Method
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Usage
const person = new Person("Alice", 30);
person.greet();


