class Person {
  static population = 0; // static attribute

  name: string;

  constructor(name: string) {
    this.name = name;
    Person.population++; // increase static value
  }

  static getPopulation() {
    return Person.population;
  }
}



const p1 = new Person("Alice");
const p2 = new Person("Bob");

console.log(Person.getPopulation()); // Output: 2

