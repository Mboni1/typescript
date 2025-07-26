class Dog {
    firstName: string;
    lastName : string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName
    }
}
class Cat {
    firstName: string;
    constructor(firstName: string){
        this.firstName = firstName;
    }
}
function getName(animal: Cat | Dog){
    if (animal instanceof Cat){
        console.log("the name is ", animal.firstName)
    } else {
        console.log("the name is", animal.firstName+ " "+ animal.lastName)
    }
}