"use strict";
class Dog {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Cat {
    constructor(firstName) {
        this.firstName = firstName;
    }
}
function getName(animal) {
    if (animal instanceof Cat) {
        console.log("the name is ", animal.firstName);
    }
    else {
        console.log("the name is", animal.firstName + " " + animal.lastName);
    }
}
//# sourceMappingURL=index.js.map