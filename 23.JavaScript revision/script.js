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

// const multiply = function (a, b) {
//   return a * b;
// };
// const result = multiply(3, 3);
// console.log(result);

// const sum = function (x, y) {
//   return x + y;
// };
// const sum1 = sum(20, 2);
// console.log(sum1);

// const divideNum = function (num1, num2) {
//   return num1 / num2;
// };
// let divide = divideNum(20, 10);
// console.log(divide);

// arrow function

// const sum = (a, b) => {
//   return a + b;
// };
// let addition = sum(20, 10);
// console.log(addition);

// const primeNumber = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % 2 == 0) {
//       return false;
//     }
//   }
//   return true;
// };
// const isPrime = primeNumber(11);
// if (isPrime) {
//   console.log("This is a prime number");
// } else {
//   console.log("This is not a prime number");
// }

// const addSum = () => {
//   let sum = 0;
//   for (let i = 1; i <= 50; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// };
// addSum();

// const additionNum = () => {
//   let sum = 0;
//   for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
//   }
//   return sum;
// };
// let result = additionNum();
// console.log(result);

// // factorial of number

// const factorialNum = (num) => {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   console.log(factorial);
// };
// factorialNum(4);

// const multiplyNum = (num) => {
//   let multiply;
//   for (let i = 1; i <= 10; i++) {
//     multiply = num * i;
//     console.log(`${num}*${i}=${multiply}`);
//   }
// };
// multiplyNum(5);

// const fibonanciSeries = (n) => {
//   let a = 0;
//   let b = 1;
//   for (let i = 0; i <= n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// };
// fibonanciSeries(10);

// const divideNum = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0) {
//       console.log(i);
//     }
//   }
// };
// divideNum(100);

const oddSum = () => {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
    console.log(sum);
  }
};

oddSum();
