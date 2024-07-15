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

// const reversedNumber = (num) => {
//   let stringNum = num.toString();
//   let reversed = "";
//   for (let i = stringNum.length - 1; i >= 0; i--) {
//     reversed = reversed + stringNum[i];
//   }
//   console.log(reversed);

//   for (let j = 0; j < reversed.length - 2; j++) {
//     console.log(reversed[j]);
//   }
// };
// reversedNumber(789);

// const reversedNumberUsingRemainder = (num) => {
//   let string = num.toString();
//   let reversed = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     let remainder = num % 10;
//     reversed = reversed + remainder;
//     num = parseInt(num / 10);
//   }
//   console.log(reversed);
// };

// reversedNumberUsingRemainder(2468);

// const printInfo = (cars) => {
//   let firstIndex = 0;
//   let FirsElement = [0];
//   let lastIndex = cars.length - 1;
//   let lastElement = cars[cars.length - 1];
//   let seventhIndex = 7;
//   let twelvethElement = cars[11];
//   let length = cars.length;
// };

// // Reverse element

// const reverseElement = (element) => {
//   let reverse = [];
//   for (let i = 0; i < element.length; i++) {
//     reverse.unshift(element[i]);
//   }
//   console.log(reverse);
// };
// reverseElement(["car", "van", "taxi", "bus"]);

const reversedElements = (elements) => {
  let reversed = [];
  for (let i = elements.length - 1; i >= 0; i--) {
    reversed.push(elements[i]);
  }
  return reversed;
};
const originalElements = ["Apple", "Banana", "Cat"];
let reverseEle = reversedElements(originalElements);
console.log(reverseEle);
