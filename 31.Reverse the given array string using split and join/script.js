const reverseArray = (animals) => {
  let reversed = [];
  for (let i = 0; i <= animals.length - 1; i++) {
    let element = animals[i];
    let reversedArr = element.split("");
    let reverseElement = reversedArr.reverse();
    let reversedString = reverseElement.join("");
    reversed.unshift(reversedString);
  }
  console.log(reversed);
};
reverseArray(["cat", "dog", "cow"]);
