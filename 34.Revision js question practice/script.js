// let text = "How are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];
// console.log("word");

// let strings = ["52020", "Horse", "2024", "Apple"];
// let reverseStrings = strings.join();
// console.log(reverseStrings);
// let newStrings = reverseStrings.split("").join("");
// console.log(newStrings);
// console.log(reverseStrings);

// Same question repetation:

// const reverseData = (arr) => {
//   let reversed = "";
//   let element;
//   for (let i = 0; i < arr.length - 1; i++) {
//     element = arr[i];
//     // // console.log(arr[i]);
//     // reversed = reversed + arr[i];
//     // console.log(reversed);
//   }
//   for (let i = 0; i < element.length - 1; i++) {
//     //   console.log(element[i]);
//     reversed = reversed + element[i];
//     console.log(reversed);
//   }
// };

// reverseData(data);

// let newArr = [];
// const reverseData = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     // console.log(arr[i]);
//     let element = arr[i];
//     // console.log(element);
//     let elementArr = element.split("").reverse().join("");
//     newArr.push(elementArr);
//   }
//   console.log(newArr);
// };
// reverseData(data);

// const reverseArrayData = (data) => {
//   let reversedArray = [];
//   for (let i = 1; i < data.length - 1; i++) {
//     console.log(data[i]);
//     let element = data[i];
//     // console.log(element);
//     let elementReversed = element.split("").reverse().join("");
//     reversedArray.push(elementReversed);
//   }
//   console.log(reversedArray);
// };
// reverseArrayData(data);

// ["02025", "esroH", "4202"];

// const dataReverse = (data) => {
//   //   data.splice(-1);
//   let newArr = [];
//   for (let i = 0; i <= data.length - 2; i++) {
//     // console.log(data[i]);
//     let element = data[i];
//     let elementArray = element.split("");
//     elementArray.reverse();
//     let eleString = elementArray.join("");
//     // console.log(eleString);
//     newArr.push(eleString);
//   }
//   console.log(newArr);
// };

// dataReverse(data);

// const reverseArrayElement = (arr) => {
//   let reversedArr = arr.reverse();
//   let newArr = [];
//   for (let i = 0; i <= reversedArr.length - 1; i++) {
//     // console.log(arr[i]);

//     let reverseElement = reversedArr[i].split("").reverse().join("");
//     // console.log(reverseElement);
//     let strings = "";

//     for (let j = 0; j < reversedArr[i].length - 3; j++) {
//       strings = strings + reverseElement[j];
//     }
//     newArr.push(strings);
//   }

//   return newArr;
// };

// let data = ["52020", "Horse", "2024", "Apple"];
// let reversedData = reverseArrayElement(data);
// console.log(reversedData);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 4);
// console.log(citrus);

// const isPrime = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// for (let i = 1; i <= 20; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// Array.prototype.helloWorld = () => {
//   console.log("Hello world");
// };

Array.prototype.meroRollNumber = "1";
// console.log(Array.prototype);

let arr = [1, 3, 4];
// arr.helloWorld();
console.log(arr.meroRollNumber);
console.log(arr.length);

// verb=function
//Noun= property
