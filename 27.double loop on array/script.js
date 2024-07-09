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

// const findSumAndAverage = (arr) => {
//   let sum = 0;
//   let average;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
//   return (average = sum / arr.length);
// };
// const array = [1, 2, 3, 4, 5];
// const result = findSumAndAverage(array);
// console.log(result);

function findAverageSUm(number) {
  let sum = 0;
  let average;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  console.log(sum);
  return (average = sum / number);
}
const average = findAverageSUm(5);
console.log(average);
