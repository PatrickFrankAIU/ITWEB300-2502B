// Convert the Person class from the first issue ("Class Syntax, Properties, and Functions") to use getters and setters. (Remember to create private variables with the hashtag.)

// Issue 1:
// Create a Person class with properties name and age. Add a method greet() that returns a greeting message using the name property. Demonstrate how to create an instance of the class and call the greet() method.


class Person {
    #name;
    #age
    constructor(name, age) {
    this.#name = name;
    this.#age = age;
    }

    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    set name(newName) {
        this.#name = newName;
    }
    set age(newAge) {
        this.#age = newAge;
    }
    greet() {
        console.log(`The new name is ${this.#name} and the new age is ${this.#age}`)
    }
}
let newPerson = new Person('Dave', '27');
console.log(`Hello ${newPerson.name}. You are now ${newPerson.age} years old.`)
