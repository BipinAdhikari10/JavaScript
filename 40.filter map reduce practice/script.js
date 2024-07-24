// let array = [2, 4, 6, 8, 10, 12, 15, 16, 20];
// let newArray = array.filter((val) => val > 10 && val % 2 == 0);
// console.log(newArray);

// let data = [
//   {
//     name: "Bipin",
//     position: "developer",
//   },

//   {
//     name: "Ram",
//     position: "driver",
//   },
//   {
//     name: "LalGopal",
//     position: "Engineer",
//   },
// ];
// let dataResult = data.filter((val) => val.position === "developer");
// console.log(dataResult);

// let ages = [10, 20, 30];
// let result = ages.filter(checkAdult);
// console.log(result);

// function checkAdult(age) {
//   return age > 18;
// }

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((ele) => ele % 2 === 0);
// console.log(evenNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// oddNumbers = numbers.filter((ele) => ele % 2 !== 0);
// console.log(oddNumbers);

// const products = [
//   {
//     product: 1,
//     id: 1,
//     name: "milk",
//     price: 50,
//   },
//   {
//     product: 2,
//     id: 2,
//     name: "diaryMilk",
//     price: 40,
//   },
//   {
//     product: 3,
//     id: 3,
//     name: "diaryMilk",
//     price: 60,
//   },
//   {
//     product: 3,
//     id: 3,
//     name: "diaryMilk",
//     price: 90,
//   },
// ];
// let result = products.filter((val) => val.price > 40);
// console.log(result);

// find the sum of all elements of an arary

// let sumOfArr = (arr) => {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// };
// sumOfArr([1, 2, 3, 4, 5]);

// using reduce function

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((ele, acc) => {
//   return acc + ele;
// }, 0);
// console.log(sum);

// let array = [10, 20, 30, 40];
// let result = array.reduce((ele, acc) => {
//   return ele + acc;
// }, 0);
// console.log(result);

// let arr = [1, 2, 3, 4];
// let resultArr = arr.reduce((ele, acc) => {
//   return ele * acc;
// }, 1);
// console.log(resultArr);

// const numbers = [4, 16, 9, 36, 25, 64];
// let result = numbers.map(Math.sqrt);
// console.log(result);

// const numbers = [2, 4, 6, 8, 10];
// let result = numbers.map((ele) => ele * 10);
// console.log(result);

// const person = [
//   {
//     id: 1,
//     name: "Bipin",
//   },
//   {
//     id: 2,
//     name: "Bipi",
//   },
// ];
// const result = person.map((ele) => {
//   return ele.id;
// });
// console.log(result);

// function myFunction(num) {
//   return num * 10;
// }

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);

// console.log(newArr);

const doubleNum = (arr) => {
  return arr * 2;
};
let array = [2, 4, 6, 8, 10];
let result = array.map(doubleNum);
console.log(result);
