// Filter function

const age = [10, 20, 30];
const age1 = age.filter((age) => age > 0);
console.log(age1);

const number = [2, 3, 5, 6, 7, 9, 10, 11, 12];
const number1 = number.filter((ele) => ele % 2 === 0);
console.log(number1);

let users = [
  { name: "Bipin", age: 21, occupation: "programmer" },
  { name: "Shiva", age: 27, occupation: "programmer" },
  { name: "Hari", age: 19, occupation: "driver" },
];
let filterUser = users.filter((user) => {
  return user.age > 20 && user.occupation === "programmer";
});
console.log(filterUser);

let fruits = ["apple", "banana", "pea", "mango"];
let words = fruits.filter((words) => {
  return words.length > 4;
});
console.log(words);

// Bubble sort

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// const arr = [64, 34, 25, 12, 22, 11, 90];
// console.log("unsorted array", arr);
// const sortedArray = bubbleSort(arr);
// console.log("sortedArray", sortedArray);

function buubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const arr = [10, 20, 5, 50, 60, 2, 3, 4, 5];
const sortedArray = buubbleSort(arr);
console.log(sortedArray);
