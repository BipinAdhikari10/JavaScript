// // const removeDuplicates = (arr) => {
// //   let unique = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (unique.indexOf(arr[i]) === -1) {
// //       unique.push(arr[i]);
// //     }
// //   }
// //   return unique;
// // };
// // const numbers = [1, 2, 2, 4];
// // let uniqueNumber = removeDuplicates(numbers);
// // console.log(uniqueNumber);

// // const sumOfEvenNumber = (arr) => {
// //   sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 === 0) {
// //       sum = sum + arr[i];
// //     }
// //   }
// //   return sum;
// // };
// // const number = [1, 2, 3, 4, 5, 6, 7];
// // const suOfEven = sumOfEvenNumber(number);
// // console.log(suOfEven);

// // const productNum = (arr) => {
// //   product = 1;
// //   for (let i = 0; i < arr.length; i++) {
// //     product = product * arr[i];
// //   }
// //   return product;
// // };
// // const productNumber = [2, 4, 5, 6, 7];
// // const multiplyNumber = productNum(productNumber);
// // console.log(multiplyNumber);

// // function findSecondSmallest(arr) {
// //   let smallest = Infinity;
// //   let secondSmallest = Infinity;

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] < smallest) {
// //       secondSmallest = smallest;
// //       smallest = arr[i];
// //     } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
// //       secondSmallest = arr[i];
// //     }
// //   }

// //   return secondSmallest;
// // }

// // const array = [12, 4, 5, 6, 7, 3, 8];
// // const secondSmallest = findSecondSmallest(array);
// // console.log("Second smallest element:", secondSmallest);

// // function countOccurances(arr, value) {
// //   let count = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === value) count++;
// //   }
// //   return count;
// // }
// // const arrNumber = [2, 3, 4, 5, 2, 6];
// // let newArrNumber = countOccurances(arrNumber, 2);
// // console.log(newArrNumber);

// // check prime number using an array

// // function checkPrime(num) {
// //   if (num <= 1) {
// //     return false;
// //   }
// //   for (let i = 2; i <= Math.sqrt(num); i++) {
// //     if (num % i === 0) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }

// // function checkPrimeArray(arr) {
// //   let prime = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     const isPrime = checkPrime(arr[i]);
// //     prime.push(isPrime);
// //     if (isPrime) {
// //       console.log(arr[i] + " is a prime number");
// //     } else {
// //       console.log(arr[i] + " is not a prime number");
// //     }
// //   }
// //   return prime;
// // }

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let primeNumbers = checkPrimeArray(numbers);
// // console.log("Prime checks array:", primeNumbers);

// function checkPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function checkPrimeArrayNUmber(arr) {
//   let prime = [];
//   for (let i = 0; i < arr.length; i++) {
//     prime.push(checkPrime(arr[i]));
//   }
//   return prime;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let primeNumbers = checkPrimeArrayNUmber(numbers);
// console.log(primeNumbers);

// const numbers = [25, 36, 49, 64];
// const squareRoot = numbers.map(Math.sqrt);
// console.log(squareRoot);

//

// const numbers = [2, 4, 5, 6, 7, 8];
// console.log(numbers.map((num) => num * 3));

// const squareNumbers = [2, 4, 5, 6, 7, 8];
// console.log(squareNumbers.map((num) => num * num));

// function multiply(num) {
//   return num * 10;
// }

// const numbers = [10, 20, 30, 40];
// let newArr = numbers.map(multiply);
// console.log(newArr);

// function multiplyNumber(num) {
//   return num * 10;
// }
// let numbers = [10, 20, 30, 40, 50];
// let newArr = numbers.map(multiplyNumber);
// console.log(newArr);

// const pairsArray = (arr) => {
//   let target = 9;
//   pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if ((arr[i] = arr[j] === target)) {
//         pairs.push(arr[i]);
//       }
//     }
//   }
//   return pairs;
// };
// const numbers = [2, 7, 11, 15];
// const resultTarget = pairsArray(numbers);
// console.log(resultTarget);

// const reverseArray = (arr) => {
//   let reverse = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     reverse.unshift(arr[i]);
//   }
//   return reverse;
// };
// let stringArr = ["apple", "ball", "cat", "dog"];
// let reverseString = reverseArray(stringArr);
// console.log(reverseString);

// Reverse using push method

const reverseArray = (arr) => {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
};
const reverseElement = ["apple", "banana", "cat"];
let reverseArrayElement = reverseArray(reverseElement);
console.log(reverseArrayElement);

console.log("Hello");
