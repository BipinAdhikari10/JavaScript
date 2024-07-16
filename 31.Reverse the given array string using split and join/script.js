// Reverse the given array using split and join

const reverseArray = (animals) => {
  animals.reverse();
  let newArr = [];
  for (let i = 0; i <= animals.length - 1; i++) {
    let element = animals[i];
    let elementArray = element.split("");
    let reverseArrayElement = elementArray.reverse();
    let reverseString = reverseArrayElement.join("");
    newArr.push(reverseString);
  }
  return newArr;
};
const originalElement = ["cat", "dog", "tiger"];
let reverseElementArray = reverseArray(originalElement);
console.log(reverseElementArray);
