// let arr = [1, 2, 3, 4, 5, 6];
// let targetSum = 7;
// let pairs = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === targetSum) {
//       pairs.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(pairs);

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}
console.log(sum);
