// const isPalindrome = (str) => {
//   let reversedString = str.split("").reverse().join("");
//   if (str === reversedString) {
//     return true;
//   }

//   return false;
// };
// let strings = "mom";
// let value = isPalindrome(strings);
// if (value) {
//   console.log("The string is palindrome");
// } else {
//   console.log("The string is not palindrome");
// }

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 4);
// console.log(citrus);

// const cities = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];

// const newCityArr = cities.slice(2, 4);

// console.log("Original: ", cities);
// console.log("New: ", newCityArr);

// console.log(joinedStrings);

// let strings = "123";
// let num = Number(strings);
// console.log(typeof num);

// let number = 15;
// let string = number.toString();
// console.log(typeof string);

// let string = "123456";
// let number = Number(string);
// console.log(typeof number);

// let arr = ["t", "r", "e", "e"];
// let string = arr.join("");
// let joinedStrings = string.charAt(0).toUpperCase() + string.slice(1);
// console.log(joinedStrings);

const printCube = (num) => {
  return (cubeNumber = num * num * num);
};
const number = 4;
let result = printCube(number);
console.log(result);
