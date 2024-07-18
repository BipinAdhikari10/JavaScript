const isPalindrome = (str) => {
  let reversedString = str.split("").reverse().join("");
  if (str === reversedString) {
    return true;
  }

  return false;
};
let strings = "bipin";
let value = isPalindrome(strings);
if (value) {
  console.log("The string is palindrome");
} else {
  console.log("The string is not palindrome");
}
