// // const sum = () => {
// //   console.log(5 + 3);
// // };
// // for (let i = 0; i < 4; i++) {
// //   sum();
// // }

// const sum = (num1, num2, num3) => {
//   console.log(num1 + num2 + num3);
// };
// for (let i = 1; i < 4; i++) {
//   sum(i, i + 1, i + 2);
// }

// const product = (num1, num2, num3, num4) => {
//   console.log(num1 * num2 * num3 * num4);
// };
// for (let i = 5; i < 9; i++) {
//   product(i, i + 5, i + 10, i + 15);
// }

// // print number 1 to num

// const printNum = (number) => {
//   for (let i = 1; i <= number; i++) {
//     console.log(`Hello (${i})`);
//   }
// };
// printNum(5);

// // function declaration
// // no-para-no return

// function sum1() {
//   let addition = 0;
//   let a = 5;
//   let b = 6;
//   addition = a + b;
//   console.log(addition);
// }
// sum1();

// // function Expression
// // para and no return

// let addNumbers = function (a, b) {
//   let sum;
//   sum = a + b;
//   console.log(sum);
// };

// addNumbers(10, 20);

// // arrow function
// // para and return

// const addNums = (num1, num2) => {
//   return num1 + num2;
// };
// let result = addNums(2, 1);
// console.log(result);

// // no para return
// const addNumber = () => {
//   let a = 5;
//   let b = 6;
//   return a + b;
// };
// let additionNumber = addNumber();
// console.log(additionNumber);

// sum of odd numbers

const oddNums = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }
  return sum;
};
let sum = oddNums(10);
console.log(sum);


