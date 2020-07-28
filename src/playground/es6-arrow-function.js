const square = function (x) {
  return x * x;
}

const squareArrow = (x) => {
  return x * x;
}

const squareArrow = (x) => x * x;

console.log(squareArrow(8))

Use arrow function to create get first name

const firstName = (string) => {
  return string.split(' ')[0]
}

const firstNameShort = (string) => string.split(' ')[0]

console.log(firstName('Leo Carey'))
console.log(firstNameShort('Ella Cade-Smith'))
