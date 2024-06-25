// // print 1 to 100 using function

// const printNum = () => {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// };
// printNum();

// print even number 1 to 50

// const printEvenNUmber = () => {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// };
// printEvenNUmber();

function multiplyNum(num) {
  let product;
  for (let i = 1; i <= 10; i++) {
    product = num * i;
    console.log(`The multiplaction number of ${num}*${i} =${product}`);
  }
}
multiplyNum(5);
