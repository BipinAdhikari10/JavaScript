const reverseArray = (animals) => {
  let reversed = [];
  for (let i = animals.length - 1; i >= 0; i--) {
    let element = animals[i];
    let reversedArr = element.split("");
    let reverseElement = reversedArr.reverse();
    let reversedString = reverseElement.join("");
    reversed.push(reversedString);
  }
  console.log(reversed);
};
reverseArray(["cat", "dog", "cow"]);
