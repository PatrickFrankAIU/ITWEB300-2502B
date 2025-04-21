// Write a class Counter with an internal function increment() that increases a count property. Create a method getCount() that accesses the count and shows the current count. Show how getCount() can still access count even after the increment() method has been called.


class Counter {
    constructor(count) {
      // use the parameter directly
      let internalCount = count;
  
      function increment() {
        internalCount++;
      }
  
      this.increment = function () {
        increment();
      };
  
      this.getCount = function () {
        return internalCount;
      };
    }
  }
  
  