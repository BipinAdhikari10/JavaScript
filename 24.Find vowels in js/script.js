// // // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // // let fruit = fruits.includes("Banana");
// // // console.log(fruit);

// // // let language = ["C", "JavaScript"];
// // // let languages = language.includes("python");
// // // console.log(languages);

// // // let vehicles = ["Car", "Van", "Bus"];
// // // let vehicle = vehicles.includes("Car");
// // // console.log(vehicle);

// // // // const findVowels = (inputString) => {
// // // //   const vowels = "aeiouAEIOU";
// // // //   let vowel = 0;
// // // //   for (char of inputString) {
// // // //     if (vowels.includes(char)) {
// // // //       vowel++;
// // // //     }
// // // //   }
// // // //   return vowel;
// // // // };
// // // // const string = "Helloaeiou";
// // // // const result = findVowels(string);
// // // // console.log(result);

// // // // const vowelsSound = (str) => {
// // // //   let vowel;
// // // //   const vowels = ["a", "e", "i", "o", "u"];
// // // //   for (char of str) {
// // // //     if (vowels.includes(char)) {
// // // //       console.log(char);
// // // //     }
// // // //   }
// // // //   return vowel;
// // // // };
// // // // vowelsSound("aeroplane");

// // // const findVowels = (inputString) => {
// // //   const vowels = "aeiouAEIOU";
// // //   let vowel = 0;
// // //   for (char of inputString) {
// // //     if (vowels.includes(char)) {
// // //       vowel++;
// // //     }
// // //   }
// // //   return vowel;
// // // };
// // // const string = "Helloaeiou";
// // // const result = findVowels(string);
// // // console.log(result);

// // // const vowelsSound = (str) => {
// // //   let vowel = 0;
// // //   const vowels = "aeiouAEIOu";
// // //   for (char of str) {
// // //     if (vowels.includes(char)) {
// // //       vowel++;
// // //     }
// // //   }
// // //   return vowel;
// // // };

// // // let strings = "aeroplane";
// // // let results = vowelsSound(strings);
// // // console.log(results);

// // const rightAngledTriangle = (n) => {
// //   for (let i = 1; i <= n; i++) {
// //     console.log("*".repeat(i));
// //   }
// // };
// // // rightAngledTriangle(10);

// // // const reverseNum = (n) => {
// // //   for (let i = n; i > 0; i--) {
// // //     console.log(i);
// // //   }
// // // };
// // // reverseNum(5);

// // const reversedString = (str) => {
// //   let reversed = "";
// //   for (let i = str.length - 1; i >= 0; i--) {
// //     reversed += str[i];
// //   }
// //   return reversed;
// // };
// // let originalString = "BipinAdhikari";
// // let reverseString = reversedString(originalString);
// // console.log(reverseString);

// // const findSum = (arr) => {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sum = sum + arr[i];
// //   }
// //   return sum;
// // };
// // const array = [1, 2, 3, 4, 5];
// // let sum = findSum(array);
// // console.log(sum);

// // const findMax = (arr) => {
// //   let max = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > max) {
// //       max = arr[i];
// //     }
// //   }
// //   return max;
// // };
// // const arrays = [10, 20, 30, 40, 50];
// // let maximumNumber = findMax(arrays);
// // console.log(maximumNumber);

// function findOdd(num) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }
// findOdd(10);

// const findSum = () => {
//   sum = 0;
//   for (let i = 1; i <= 50; i++) {
//     sum = sum + i;
//   }
//   return sum;
// };
// const result = findSum();
// console.log(result);

// const reversedArray = (arr) => {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed = reversed + arr[i];
//   }
//   return reversed;
// };
// originalArray = [1, 2, 3, 4, 5];
// result = reversedArray(originalArray);
// console.log(result);

const findEven = (arr) => {
  evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
};
const array = [1, 2, 3, 45, 56, 7, 8, 910, 10, 11, 12];
let evenNum = findEven(array);
console.log(evenNum);
