// take two arguments in a function array and element then return index of an element if the element exists in an array

// let text = "Hello1 world, 2 welcome to the universe.";
// let result = text.indexOf("e");
// console.log(result);

// const findFactorialNum = (num) => {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   console.log(factorial);
// };
// findFactorialNum(5);

// const findIndexArray = (arr, ele) => {
//   return arr.indexOf(ele);
// };
// let number = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = findIndexArray(number, 7);
// console.log(result);

// const findArrayElementIndex = (arr, ele) => {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === ele) {
//       return i;
//     }
//   }
//   return -1;
// };
// let array = [1, 2, 3, 5, 6, 8, 9];
// let element = 8;
// let result = findArrayElementIndex(array, element);
// console.log(result);

// const findArrayElement = (arr, ele) => {
//   return arr.indexOf(ele);
// };
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let element = 9;
// let result = findArrayElement(number, element);
// console.log(result);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", 4);
// console.log(index);

// const removeDuplicate = (arr) => {
//   let newArr = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };
// const array = [1, 2, 3, 2, 3, 4];
// let result = removeDuplicate(array);
// console.log(result);

// const findArrayElement = (arr, ele) => {
//   return arr.indexOf(ele);
// };
// let number = [1, 2, 2, 4, 6, 2];
// let element = 2;
// let result = findArrayElement(number, element);
// console.log(result);

// const findIndices = (arr, ele) => {
//   let indices = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === ele) {
//       indices.push(i);
//     }
//   }
//   return indices;
// };
// let number = [1, 2, 2, 4, 6, 2];
// let element = 2;
// let result = findIndices(number, element);
// console.log(result);

const findPower = (num) => {
  let power = 1;
  for (let i = 1; i <= 5; i++) {
    power = power * num;
    console.log(power);
  }
};
findPower(2);
