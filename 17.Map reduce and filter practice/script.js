// map function

const array = [2, 4, 6, 8];
let doubleArray = array.map(function (ele) {
  return ele * 2;
});
console.log(doubleArray);

// arrow function

const array1 = [2, 4, 6, 8];
const square = array1.map((ele) => ele * ele);
console.log(square);
