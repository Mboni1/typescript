class Person {
  public name: string;  // Explicit public (redundant but clear)
  age: number;         // Implicitly public
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  public greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const person = new Person("Alice", 30);
console.log(person.name);  // Accessible
person.greet();            // Accessible