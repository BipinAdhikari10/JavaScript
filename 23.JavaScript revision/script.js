// const a = "15";
// const b = "volvo";
// console.log(a + b);
// console.log(typeof (a + b));

// const x = 20;
// const y = 2;
// console.log(typeof (x + y));

// let c = "tesla";
// let d = 17;
// console.log(c + d);
// console.log(typeof (c + d));

// let a = 15;
// let b = 20;
// let c = "tesla";
// console.log(a + b + c);
// console.log(typeof (a + b + c));

// let a = "Tesla";
// let b = 2;
// let c = 20;
// console.log(a + b + c);
// console.log(typeof (a + b + c));

// function addSum() {
//   let a = 5;
//   let b = 6;
//   return a + b;
// }
// let sum = addSum();
// console.log(sum);

// String to number

// const quantity = "12";
// console.log(typeof quantity);
// console.log(typeof +quantity);
// console.log(+quantity);

// const string = "awosome";
// console.log(+string);

// const stringNumber = 20;
// console.log(stringNumber * 2);

// Number to string

// let num = 25;
// let text = num.toString();
// console.log(text);
// console.log(typeof text);
// let num = 15;
// let text = num.toString(8);
// console.log(text);

// const primeNumber = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % 2 === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };
// const isPrime = primeNumber(9);
// if (isPrime) {
//   console.log("This is prime number");
// } else {
//   console.log("This is not a prime number");
// }

// Function

// parameter with return type

// function myFunction(p1, p2) {
//   return p1 * p2;
// }
// let product = myFunction(2, 2);
// console.log(product);

// function expression

const multiply = function (a, b) {
  return a * b;
};
const result = multiply(3, 3);
console.log(result);

const sum = function (x, y) {
  return x + y;
};
const sum1 = sum(20, 2);
console.log(sum1);

const divideNum = function (num1, num2) {
  return num1 / num2;
};
let divide = divideNum(20, 10);
console.log(divide);
