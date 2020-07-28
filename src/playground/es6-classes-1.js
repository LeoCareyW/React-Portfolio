
class Person {
  constructor(name = 'Unknown', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    // return 'Hi, I am ' + this.name + '!';
    return `Hi I'm ${this.name} and im r8 cool`
  }
  getDescription() {
    return `Hi I'm ${this.name} and I'm ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` My major is in ${this.major}`
    }
    return description;
  }
}


class Traveler extends Person {
  constructor(name, age, location) {
  super(name, age);
  this.location = location
  }

  hasLocation() {
    return !!this.location
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasLocation()) {
      greeting += ` I am from ${this.location}`
    }
    return greeting
  }
}

const moi = new Traveler('Leo Carey-Williams', 24, 'London');
console.log(moi.getGreeting());

const other = new Traveler('Ella', '24')
console.log(other.getGreeting());















