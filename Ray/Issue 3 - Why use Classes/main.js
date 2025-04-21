// Create a Book class with properties title, author, and pages. Then, create a similar structure using a function constructor. Discuss the benefits of using classes (e.g., better organization, inheritance, and method sharing) versus using a function constructor.


// Class way:
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    bookStats() {
        return `The book titled ${this.title} is ${this.pages} pages long, and was written by ${this.author}.`
    }
}

const hyperion = new Book('Hyperion', 'Dan Simmons', 496);
console.log(hyperion.bookStats());

// This is the modern ES6 way.
// bookStats() method is defined within the class body, which helps with readability (if our code was huge).
// The class method supports super and getters/setters.
// The class method also supports extends, which is an easier way to build inheritance.


// Function constructor way
function Book2(title2, author2, pages2) {
    this.title2 = title2;
    this.author2 = author2;
    this.pages2 = pages2;
}

Book2.prototype.book2Stats = function () {
    return `The book titled ${this.title2} is ${this.pages2} pages long, and was written by ${this.author2}.`
}

const hobbit = new Book2('The Hobbit', 'J.R.R. Tolkein', 310);
console.log(hobbit.book2Stats());

// This is the older way.
// The book2Stats method is not contained within the constructor function and has to be added manually with prototype.
// This method does not support extends, super, or getter/setter.