// map function

const array = [2, 4, 6, 8];
let doubleArray = array.map(function (ele) {
  return ele * 2;
});
console.log(doubleArray);

// arrow function

const array1 = [2, 4, 6, 8];
const square = array1.map((ele) => ele * ele);
console.log(square);

const numbers = [16, 64];
const num = numbers.map(Math.sqrt);
console.log(num);

const multiply = [2, 4, 6, 8, 10];
const multiplyNum = multiply.map((multiply) => multiply * 10);
console.log(multiplyNum);

const arrays1 = [2, 4, 6, 9, 16];
const result = arrays1.map((x) => x * 2);
console.log(result);
