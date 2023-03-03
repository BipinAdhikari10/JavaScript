//function declaration

// function addNumbers(a, b) {
//   return a + b;

// }
// const result = addNumbers(4, 5);
// console.log(result);

// //function expression

// const addNumbers2 = function (a, b) {
//   return a + b;
// };
// const addNumbers3 = addNumbers2;

// const addNumbers4 = addNumbers3(10, 5);

// console.log(`The sum is${addNumbers4}`);

// // //arrow function

// // const addNumbers5 = (a, b) => a + b;

// // const addNumbers6 = addNumbers5;
// // const addNumbers7 = addNumbers6(60, 20);
// // console.log(`The sum  is  ${addNumbers7}`);

// //function declaration

// // function multiplyNumbers(a, b) {
// //   return a * b;
// // }
// // const result = multiplyNumbers(10, 5);
// // console.log(result);

// //function expression

// // const multiplyNumbers2 = function (a, b) {
// //   return a * b;
// // };
// // const multiplyNumbers3 = multiplyNumbers2;
// // const multiplyNumbers4 = multiplyNumbers3(20, 2);
// // console.log(`The multiply number is${multiplyNumbers4}`);

// // //Arrow function

// // const multiplyNumbers5 = (a, b) => a * b;

// // const multiplyNumbers6 = multiplyNumbers5;
// // // const multiplyNumbers7 = multiplyNumbers6(30, 40);
// // console.log(`The multiplication number is ${multiplyNumbers7}`);/

// //function declaration

// function subtractNumers(a, b) {
//   return a - b;
// }
// const result = subtractNumers(5, 4);
// console.log(result);

// //function expression

// const subtractNumers2 = function (a, b) {
//   return a - b;
// };
// //pointing the function
// const subtractNumers3 = subtractNumers2;

// //calling the function

// const subtractNumers4 = subtractNumers3(10, 5);

// console.log(`The subtraction number is ${subtractNumers4}`);

// //Arrow function

// const subtractNumers5 = (a, b) => a - b;
// const subtractNumers6 = subtractNumers5;
// const subtractNumers7 = subtractNumers6(20 - 10);
// console.log(`The subtraction number is ${subtractNumers7}`);

function areaOfrect(length, width) {
  return length * width;
}
result = areaOfrect(5, 6);
console.log(`The area of rectangle is ${result}`);

//Expression function

const areaOfrect2 = function (length, width) {
  return length * width;
};
const areaOfrect3 = areaOfrect2;

const areaOfrect4 = areaOfrect3(20, 10);

console.log(`The area of rectangle is ${areaOfrect4}`);

//Arrow function

const areaOfrect5 = (length, width) => length * width;

const areaOfrect6 = areaOfrect5;
const areaOfrect7 = areaOfrect6(20, 50);
console.log(`The area of rectangle is ${areaOfrect7}`);
