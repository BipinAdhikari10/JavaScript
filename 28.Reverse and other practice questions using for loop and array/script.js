function reversedNumber(number) {
  let reversed = [];
  for (let i = number.length - 1; i >= 0; i--) {
    reversed.push(number[i]);
  }
  return reversed;
}
let originalNumber = [1, 2, 3, 4, 5];
let reverseNum = reversedNumber(originalNumber);
console.log(reverseNum);

const reversedString = (str) => {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string = string + str[i];
  }
  return string;
};
const originalString = "Bipin";
let newString = reversedString(originalString);
console.log(newString);
console.log(typeof newString);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 22, 31, 52];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
