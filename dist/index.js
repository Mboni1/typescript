"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
const person = new Person("Alice", 30);
console.log(person.name);
person.greet();
//# sourceMappingURL=index.js.map