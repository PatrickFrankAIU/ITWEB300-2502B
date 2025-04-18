class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getinfo() {
        return "I have a " + this.make + " " + this.model;
    }
}

class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }

    present() {
        return this.getinfo() + " " + this.doors + " door";
    }
}

let myCar = new Car("Lincoln", "Towncar", 4);
console.log(myCar.present());