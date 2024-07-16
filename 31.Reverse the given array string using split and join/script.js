// const reverseArray = (animals) => {
//   let reversed = [];
//   for (let i = 0; i <= animals.length - 1; i++) {
//     let element = animals[i];
//     let reversedArr = element.split("");
//     let reverseElement = reversedArr.reverse();
//     let reversedString = reverseElement.join("");
//     reversed.unshift(reversedString);
//   }
//   console.log(reversed);
// };
// reverseArray(["cat", "dog", "cow"]);

// print 1 to 10

// const printNum = (num) => {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// };
// printNum(10);

// const printOddNum = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// };
// printOddNum(20);

// const printSum = (num) => {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// };
// printSum(7);

// const printMultiply = (num) => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`The multiplication  of ${num} *  ${i} is ${num * i}`);
//   }
// };

// printMultiply(5);

// const printMultiply = (num) => {
//   for (let i = 1; i <= num; i++) {
//     console.log(`The multiplaction table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i}*${j}=${i * j}`);
//     }
//   }
// };
// printMultiply(5);

// const printMultiply = (num) => {
//   let multiply = [];
//   for (let i = 1; i <= 10; i++) {
//     multiply.push(num * i);
//   }
//   return multiply;
// };
// let number = printMultiply(10);
// console.log(number);

const printMultipleTable = (num) => {
  let greaterNum = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= 10; j++) {
      let product = i * j;
      console.log(product);
      if (product > greaterNum) {
        greaterNum = product;
      }
    }
  }
  return greaterNum;
};
let number = 3;
let result = printMultipleTable(number);
console.log(result);
