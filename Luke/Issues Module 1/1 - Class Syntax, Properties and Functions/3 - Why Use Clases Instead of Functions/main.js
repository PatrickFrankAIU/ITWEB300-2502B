class Book {
    constructor(title, author, pages) {
        this.title= title;
        this.author= author;
        this.pages= pages;
    }
};

function Book(title, author, pages) {
    this.title= title;
    this.author= author;
    this.pages = pages;
};

// classes are able to utilize inheritance through the keywords "extend" and "super." Classes enable code to be organized better, especially when additional complexity is established and/or there is an extensive amount of objects. Classes also provide additional features like static methods, private fields and help enhance encapsulation and privacy.