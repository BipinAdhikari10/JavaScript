const removeDuplicates = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
};
const numbers = [1, 2, 2, 4];
let uniqueNumber = removeDuplicates(numbers);
console.log(uniqueNumber);

const sumOfEvenNumber = (arr) => {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
};
const number = [1, 2, 3, 4, 5, 6, 7];
const suOfEven = sumOfEvenNumber(number);
console.log(suOfEven);

const productNum = (arr) => {
  product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  return product;
};
const productNumber = [1, 2, 3, 4, 5];
const multiplyNumber = productNum(productNumber);
console.log(multiplyNumber);
