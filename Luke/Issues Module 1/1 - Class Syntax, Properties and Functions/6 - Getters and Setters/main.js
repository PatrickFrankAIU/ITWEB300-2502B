class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name= name;
        this.#age= age;
    }

    get name() {
      return this.#name;
    }

    set name(newName) {
      this.#name = newName;
    }

    get age() {
      return this.#age;
    }

    set age(newAge) {
      this.#age = newAge;
    }

    
    greet(){
      console.log("Greetings " + this.#name + "!");  
    }
}

let thisPerson = new Person ("David", 49);

thisPerson.greet();

