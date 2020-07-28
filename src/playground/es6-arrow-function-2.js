const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 9,
  multiply() {
    return this.numbers.map((num) => num * multiplier.multiplyBy);
  // multiplyBy - single number
  // multiply - returns a new array where numbers have been multiplied together
  }
}

console.log(multiplier.multiply());
