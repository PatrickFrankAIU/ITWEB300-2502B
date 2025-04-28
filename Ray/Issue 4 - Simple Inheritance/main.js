// Create a Vehicle class with properties make and model, and a method getInfo(). Then, create a Car class that inherits from Vehicle and adds a doors property. Demonstrate how to override the getInfo() method in the Car class to include the number of doors.


class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `For this ${this.make} make and ${this.model} model, the car has 2 doors.`
    }
}
const car2 = new Vehicle ("Toyota", "Prius");
console.log(car2.getInfo());

class Car extends Vehicle {
    constructor(make, model, doors) {
    super(make, model);
    this.doors = doors;
}
getInfo() {
    return `For the ${this.make} make and ${this.model} model, the car has ${this.doors} doors.`
}
}
const car3 = new Car("Toyota", "Prius", 4);

console.log(car3.getInfo());