// // const arr = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];
// // let sum = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = 0; j < arr[i].length; j++) {
// //     sum += arr[i][j];
// //   }
// // }
// // console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6];
// let targetSum = 7;
// pairs = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] == targetSum) {
//       pairs.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(pairs);

// // making push method

// const pushArray = (cars, value) => {
//   cars[cars.length] = value;
//   return cars.length;
// };
// const cars = ["BMW", "Creta"];
// let pushArr = pushArray(cars, "Tesla");
// console.log(cars);

// const makingPushArray = (bike, value) => {
//   bike[bike.length] = value;
//   return bike.length;
// };
// const bikeModels = ["Yamaha", "Bajaj"];
// let newBike = makingPushArray(bikeModels, "KTM");
// console.log(bikeModels);

// function findAverageSUm(number) {
//   let sum = 0;
//   let average;
//   for (let i = 1; i <= number; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
//   return (average = sum / number);
// }
// const average = findAverageSUm(5);
// console.log(average);

// const findSumAndAverage = (arr) => {
//   let sum = 0;
//   // let average;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
//   return sum / arr.length;
// };
// const array = [1, 2, 3, 4, 5];
// const result = findSumAndAverage(array);
// console.log(result);

const findNewNumber = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 2 && arr[i] < 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
const result = findNewNumber([1, 2, 3, 12, 4]);
console.log(result);

// Star pattern

function printStarPattern(number) {
  for (let i = 1; i <= number; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "* ";
    }
    console.log(star);
  }
}
printStarPattern(5);

const findMaximumNumber = (arr) => {
  let maxNum = [0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
};
const number = findMaximumNumber([1, 5, 10, 15, 2, 20, 50]);
console.log(number);
