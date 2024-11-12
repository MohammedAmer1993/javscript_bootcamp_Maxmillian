class Course {
  #_price = 0;
  set price(val) {
    if (val <= 0) {
      this.#_price = 30;
    }
  }

  get price() {
    return this.#_price.toString();
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#_price = price;
  }

  getPriceVsValue() {
    return parseInt(this.length)/parseInt(this.price);
  }

  printSummry() {
    const summery = `this course is about ${this.title}, it costs ${this.price} and it will take you ${this.length} to complete`;
    console.log(summery);
  }
}

class PracticalCourse extends Course {
constructor(title, length, price, num) {
    super(title, length, price);
    this.numOfExercises = num;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, price, length) {
    super(title, length, price)
  }

  publish() {
    console.log("published in many science magazines");
  }
}

const course1 = new Course("math", "9", 19.99);
const course2 = new Course("physics", "17", 32.99);

course1.printSummry();
course2.printSummry();

console.log(course1.getPriceVsValue());
console.log(course2.getPriceVsValue());

console.log(course1);
console.log(course2);

const prac = new PracticalCourse("mechanics", "63", 123, 20);
const ther = new TheoreticalCourse("algebra", "34", 57);

ther.publish();

const cor = new Course("any", "6", 3);
console.log(cor.price);
