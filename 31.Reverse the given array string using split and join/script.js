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

const printMultiply = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`The multiplication  of ${num} *  ${i} is ${num * i}`);
  }
};

printMultiply(5);
