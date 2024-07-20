const sumIndices = (arr, target) => {
  //   let target = 9;
  let arrayIndex = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    for (j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        arrayIndex.push(i, j);
      }
    }
  }
  return arrayIndex;
};
const array = [2, 4, 8, 1];
let result = sumIndices(array, 9);
console.log(result);
