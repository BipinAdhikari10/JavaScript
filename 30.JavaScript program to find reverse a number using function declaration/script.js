const reverseNumber = function (number) {
  let reversedNumber = 0;
  while (number !== 0) {
    const remainder = number % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    number = Math.floor(number / 10);
  }
  return reversedNumber;
};

// Example usage
console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(789)); // Output: 987
