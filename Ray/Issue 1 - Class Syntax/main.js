// Create a Person class with properties name and age. Add a method greet() that returns a greeting message using the name property. Demonstrate how to create an instance of the class and call the greet() method.

// (Note: Do not use getters and setters for this exercise. This class will simply use public properties to access and change that data.)

function Person(name, age) {
        this.name=name;
        this.age=age;
    
        this.greet = () => {
            console.log(`Hello ${this.name}!`);
        } 
    }
    let alf = new Person('Alf', 900);
    let marvin = new Person('Marvin the Martian', 700);

    alf.greet();
    marvin.greet();