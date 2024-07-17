const findIndexOfElement = (arr, ele) => {
  let element = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === ele) {
      element.push(arr[i]);
    }
  }
  return element;
};
const elementArray = [1, 2, 3, 4, 5, 6];
let newArrayElement = findIndexOfElement(elementArray, 2);
console.log(newArrayElement);
