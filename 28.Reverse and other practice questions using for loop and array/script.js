// function reversedNumber(number) {
//   let reversed = [];
//   for (let i = number.length - 1; i >= 0; i--) {
//     reversed.push(number[i]);
//   }
//   return reversed;
// }
// let originalNumber = [1, 2, 3, 4, 5];
// let reverseNum = reversedNumber(originalNumber);
// console.log(reverseNum);

// const reversedString = (str) => {
//   let string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     string = string + str[i];
//   }
//   return string;
// };
// const originalString = "Bipin";
// let newString = reversedString(originalString);
// console.log(newString);
// console.log(typeof newString);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 22, 31, 52];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const greaterNumber = number.filter((num) => num > 5);
// console.log(greaterNumber);

// Write a function that takes an array of numbers and returns the sum of the square roots of all elements.

function sumOfSquareRoots(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.sqrt(arr[i]);
  }
  return sum;
}

let numbers = [1, 4, 9, 16, 25, 64];
let result = sumOfSquareRoots(numbers);
console.log(result);
