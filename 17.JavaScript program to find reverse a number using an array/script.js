function reverseNumber(number) {
  // Convert the number to a string and split it into an array of digits
  let digits = number.toString().split("");

  // Reverse the array using the Array.reverse() method
  let reversedDigits = digits.reverse();

  // Join the array back into a string and parse it as an integer
  let reversedNumber = parseInt(reversedDigits.join(""));

  // Return the reversed number
  return reversedNumber;
}

// Example usage
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(987654321)); // Output: 123456789
