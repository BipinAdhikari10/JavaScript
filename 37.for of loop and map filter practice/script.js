// Using for of loop
// const findNewArr = (arr) => {
//   let newArr = [];
//   for (let ele of arr) {
//     if (ele > 2 && ele < 10 && ele % 2 === 0) {
//       newArr.push(ele);
//     }
//   }
//   console.log(newArr);
// };
// findNewArr([1, 3, 6, 8, 7, 10]);

// // using filter function

// // let newArray = array.filter((ele) => ele > 2 && ele < 10 && ele % 2 === 0);
// // console.log(newArray);

// // let newArray = array.map((ele) => ele * 2);
// // console.log(newArray);

// // let newArray = array.map((ele) => Math.sqrt(ele));
// // console.log(newArray);

// let array = [2, 4, 5, 6];

// let newArray = array.map((ele) => ele * ele);
// console.log(newArray);

// Using map function

// let stringArray = ["Hello", "bipin", "kxa"];
// let stringLength = stringArray.map((ele) => ele.length);
// console.log(stringLength);

// // using for of loop

// const findLength = (strings) => {
//   let newArr = [];
//   for (ele of strings) {
//     let element = ele.length;
//     newArr.push(element);
//   }
//   console.log(newArr);
// };
// findLength(["hello", "kxa", "lakkua"]);

// // Using for loop
// let elementLength = (strings) => {
//   let newArray = [];
//   for (let i = 0; i <= strings.length - 1; i++) {
//     let elements = strings[i];
//     newArray.push(elements.length);
//   }
//   console.log(newArray);
// };
// elementLength(["Hello", "kxa", "Bipin"]);

// double element using map function

// let doubleNumbers = numbers.map((ele) => ele * 2);
// console.log(doubleNumbers);

// const doubleNum = (arr) => {
//   let newArr = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let element = arr[i];
//     let double = element + element;
//     newArr.push(double);
//   }
//   console.log(newArr);
// };
// doubleNum(numbers);

// const doubleNumber = (arr) => {
//   let newArr = [];
//   for (ele of arr) {
//     newArr.push(ele * 2);
//   }
//   console.log(newArr);
// };
// doubleNumber(numbers);

// convert dollars price to euro price

// const dollarPrice = (arr) => {
//   let euro = 0.85;
//   newPrice = [];
//   for (ele of arr) {
//     convert = euro * ele;
//     newPrice.push(convert);
//   }
//   return newPrice;
// };

// let priceIn$ = dollarPrice(price);
// console.log(priceIn$);

// using map function

let price = [10, 20, 30, 40];
let euros = 0.85;
let dollar = price.map((ele) => ele * euros);
console.log(dollar);
