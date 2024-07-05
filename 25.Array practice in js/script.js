// const factorialNum = (num) => {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   console.log(factorial);
// };
// factorialNum(5);

// const sumArray = (array) => {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// };
// const number = [2, 4, 5];
// let addition = sumArray(number);
// console.log(addition);

// const buggyLoop = () => {
//   let numbers = [1, 2, 3, 4, 5];
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//   }
// };
// // buggyLoop();

// function isPrime(num) {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// function printPrimeNumbers(n) {
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }
// printPrimeNumbers(100);

const findEven = (array) => {
  let even = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    }
  }
  return even;
};
const array = [1, 2, 3, 4, 5];
let evenNumbers = findEven(array);
console.log(evenNumbers);

const findOddNumbers = (arr) => {
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  return odd;
};
console.log(findOddNumbers([1, 2, 3, 4, 5]));
