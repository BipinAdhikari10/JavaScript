// const reverseNumber = (num) => {
//   let string = num.toString();
//   //   console.log(typeof string);
//   let reverse = "";
//   for (let i = 0; i <= string.length - 1; i++) {
//     let remainder = num % 10;
//     reverse = reverse + remainder;
//     num = parseInt(num / 10);
//   }
//   return reverse;
// };

// let number = reverseNumber(2978);
// console.log(number);

// // let marks = 40;
// // let result = marks > 40 ? "paass" : "fail";
// // console.log(result);

// // let age = 10;
// // let vote = age > 10 ? "vote" : "no vote";
// // console.log(vote);

// // reverse using unshift

// // let reverseArray = (arr) => {
// //   let reverse = [];
// //   for (i = arr.length - 1; i >= 0; i--) {
// //     reverse.push(arr[i]);
// //   }
// //   console.log(reverse);
// // };
// // reverseArray([1, 2, 3, 4]);

// const reverseArray = (arr) => {
//   let reverse = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     reverse.unshift(arr[i]);
//   }
//   console.log(reverse);
// };
// reverseArray([1, 2, 3, 4, 5, 6, 12]);

// // reverse element using unshift

// let reverseELement = (arr) => {
//   let reverse = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let element = arr[i];
//     reverse.unshift(element);
//   }
//   console.log(reverse);
// };
// reverseELement(["car", "van", "taxi"]);

// reverse array

// let array = ["apple", "ball"];

// let string = "bipin";
// let arrString = string.split("").reverse().join("");
// console.log(arrString);

// result ["regit","tac","god"]

// const reverseElement = (arr) => {
//   arr.reverse();
//   let newArr = [];
//   //   console.log(reverse);
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let element = arr[i];
//     // console.log(element);
//     let eleArr = element.split("");
//     let reverseEle = eleArr.reverse();
//     let joinArr = reverseEle.join("");
//     // console.log(joinArr);
//     newArr.push(joinArr);
//     // console.log(reverseEle);
//     // console.log(eleArr);
//   }
//   console.log(newArr);
// };
// reverseElement(array);

// let array = ["dog", "cat", "tiger"];

// const revverseElement = (arr) => {
//   arr.reverse();
//   let newArr = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let element = arr[i];
//     let reverseString = element.split("").reverse().join("");
//     // console.log(reverseString);
//     newArr.push(reverseString);
//   }
//   console.log(newArr);
// };
// revverseElement(array);

// const printMultipy = (num) => {
//   for (let i = 1; i <= num; i++) {
//     console.log(`The multiplaction table of ${i} is`);
//     for (let j = 1; j <= 10; j++) console.log(`${i}*${j}=${i * j}`);
//   }
// };
// printMultipy(10);
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", -1);
// console.log(index);

// const arguments = (arr, ele) => {
//   return arr.indexOf(ele);
// };
// let number = [10, 20, 30, 40, 50, 60];
// let result = arguments(number, 60);
// console.log(result);

// const factorialNum = (num) => {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   console.log(factorial);
// };
// factorialNum(5);

// let arguments = (arr, ele) => {
//   let newArr = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === ele) {
//       newArr.push(indexOf(arr[i]));
//     }
//   }
//   return newArr;
// };

// let array = [1, 20, 4, 2, 3, 10, 4, 5];
// let result = arguments(array, 4);
// console.log(result);

let animals = ["cow", "dog"];
animals.reverse();
console.log(animals);
