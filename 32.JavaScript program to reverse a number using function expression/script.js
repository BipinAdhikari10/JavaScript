const reverseNumber = function (num) {
  let reversed = 0;
  while (num !== 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed;
};

// Example usage:
console.log(reverseNumber(12345)); // Output: 54321
