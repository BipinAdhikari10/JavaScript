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

// const reversedElements = (elements) => {
//   let reversed = [];
//   for (let i = elements.length - 1; i >= 0; i--) {
//     reversed.push(elements[i]);
//   }
//   return reversed;
// };
// const originalElements = ["Apple", "Banana", "Cat"];
// let reverseEle = reversedElements(originalElements);
// console.log(reverseEle);

// const fruits = ["apple", "banana", "mango"];
// let reversedArray = fruits.reverse();
// console.log(reversedArray);

// const animals = ["Tiger", "Lion", "Leopard", "Elephant", "Rhino"];
// let reversedArray = animals.reverse();
// console.log(reversedArray);

// Reverse string

// const reversedString = (name) => {
//   let reversed = "";
//   for (let i = name.length - 1; i >= 0; i--) {
//     reversed = reversed + name[i];
//   }
//   console.log(reversed);
// };
// reversedString("Bipin");

// const sentences = "How are you doing today";
// let array = sentences.split();
// console.log(array);

// const text = "How are you doing today?";
// let myArray = text.split(" ");
// console.log(myArray);
// // let word = myArray[1];
// // console.log(word);

// // const fruits = ["apple", "banana", "mango"];
// // let arrayFruits = fruits.join();
// // console.log(arrayFruits);

// const fruits = ["apple", "banana"];
// let newArr = fruits.join(" and ");
// console.log(newArr);

// const message = "Hello Goodmorning,I am busy today";
// let newArr = message.split(" ");
// console.log(newArr);

// const message = "Hello";
// let newArr = message.split("");
// console.log(newArr);

// Reversed the function using split

// const reversedString = (string) => {
//   let reversed = [];
//   let splitArray = string.split("B");
//   for (let i = splitArray.length - 1; i >= 0; i--) {
//     reversed = reversed + splitArray[i];
//   }
//   return reversed;
// };
// const sentences = "HelloBipin";
// let reversedSplit = reversedString(sentences);
// console.log(reversedSplit);

// Reversed the function using join

// const reversedJoinArray = (str) => {
//   let reverse = [];
//   let joinArray = str.join("+");
//   for (let i = joinArray.length - 1; i >= 0; i--) {
//     reverse = reverse + joinArray[i];
//   }
//   return reverse;
// };
// const originalArray = ["Messi", "Martinez", "Dimaria"];
// let reverseJoin = reversedJoinArray(originalArray);
// console.log(reverseJoin);

// let statement = "Hello i am bipin";
// let stringArr = statement.split("");
// let arrReverse = stringArr.reverse();
// let joinArr = arrReverse.join("");
// console.log(joinArr);
// // console.log(arrReverse);

// let arr = ["dog", "cat", "tiger"];
// let newarr = arr.join("");
// console.log(newarr);
// let newresult = newarr.split(",");
// let newArray = newresult.reverse();
// console.log(newArray);
// // console.log(newresult);

let array = ["dog", "cat", "tiger"]; //Expected Result: ['regit','tac','regit']

// let newVariable = array[0];
// console.log(newVariable);

const reverseArrayElements = (animals) => {
  let reversed = animals.reverse();
  let newArray = [];

  for (let i = 0; i <= reversed.length - 1; i++) {
    let element = reversed[i];
    let elementArray = element.split("");
    let reversedArray = elementArray.reverse();
    let reversedString = reversedArray.join("");
    newArray.push(reversedString);
    console.log(newArray);
  }
};
reverseArrayElements(array);
