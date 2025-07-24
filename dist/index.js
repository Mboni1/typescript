"use strict";
class Person {
    constructor(name) {
        this.name = name;
        Person.population++;
    }
    static getPopulation() {
        return Person.population;
    }
}
Person.population = 0;
const p1 = new Person("Alice");
const p2 = new Person("Bob");
console.log(Person.getPopulation());
//# sourceMappingURL=index.js.map