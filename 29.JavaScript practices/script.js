const removeDuplicates = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
};
const numbers = [1, 2, 2, 4, 5, 6, 7, 5, 4];
let uniqueNumber = removeDuplicates(numbers);
console.log(uniqueNumber);
