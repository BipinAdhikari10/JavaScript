const isPalindrome = (str) => {
  let reversedString = str.split("").reverse().join("");
  if (str === reversedString) {
    return true;
  }

  return false;
};
let strings = "mom";
let value = isPalindrome(strings);
if (value) {
  console.log("The string is palindrome");
} else {
  console.log("The string is not palindrome");
}

let arr = ["t", "r", "e", "e"];
let string = arr.join("");
let joinedStrings = string.charAt(0).toUpperCase() + string.slice(1);

console.log(joinedStrings);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 4);
console.log(citrus);

const cities = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];

const newCityArr = cities.slice(2, 4);

console.log("Original: ", cities);
console.log("New: ", newCityArr);
