// const reverseNumber = (num) => {
//   let reversed = "";
//   for (let i = num; i >= 0; i--) {
//     console.log(i);
//   }
// };
// reverseNumber(5);

// const reverseNum = (num) => {
//   let stringNum = num.toString();
//   let reversed = "";

//   for (let i = stringNum.length; i > 0; i--) {
//     let remainder = num % 10;
//     num = parseInt(num / 10);
//     // console.log(remainder);
//     reversed = reversed + remainder;
//   }
//   console.log(reversed);
// };
// reverseNum(8792);

// let name = "Bipin";
// console.log(name[0]);
// console.log(name.length);

// let object = "car";
// console.log(object.length);

// 8792
// 2978

// const printNumber = (num) => {
//   let stringNum = num.toString();

// };
// printNumber(8792);

// let number = "8792";
// console.log(number[3]);
// console.log(number[2]);
// console.log(number[1]);
// console.log(number[0]);

// for (let i = 3; i >= 0; i--) {
//   console.log(number[i]);
// }

// const printNum = (num) => {
//   let stringNum = num.toString();
//   // for (let i = stringNum.length - 1; i >= 0; i--) {
//   //   console.log(stringNum[i]);
//   // }
//   for (let i = 0; i < stringNum.length; i++) {
//     console.log(stringNum[i]);
//   }
// };
// printNum(273);

const reversedNumber = (num) => {
  let stringNum = num.toString();
  for (let i = stringNum.length - 1; i >= 0; i--) {
    console.log(stringNum[i]);
  }
};
reversedNumber(789456123);
