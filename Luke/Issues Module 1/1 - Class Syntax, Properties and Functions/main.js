class Person {
    constructor(name, age) {
        this.name= name;
        this.age= age;
    }

    greet(){
      console.log("Greetings " + this.name + "!");  
    }
}

let thisPerson = new Person ("David", 49);

thisPerson.greet();

