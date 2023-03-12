function addNumbers(num1, num2) {
  let result = []; // initialize an empty array to store the result
  let carry = 0; // initialize the carry to zero

  // loop through both numbers from the rightmost digit to the left
  for (
    let i = num1.length - 1, j = num2.length - 1;
    i >= 0 || j >= 0 || carry > 0;
    i--, j--
  ) {
    let digit1 = i >= 0 ? parseInt(num1.charAt(i)) : 0; // get the digit from num1, or 0 if i is out of range
    let digit2 = j >= 0 ? parseInt(num2.charAt(j)) : 0; // get the digit from num2, or 0 if j is out of range
    let sum = digit1 + digit2 + carry; // add the digits and the carry

    result.unshift(sum % 10); // add the rightmost digit of the sum to the beginning of the result array
    carry = Math.floor(sum / 10); // calculate the carry for the next iteration
  }

  return result.join(""); // join the digits in the result array into a string and return it
}

// example usage
let num1 = "123";
let num2 = "456";
let sum = addNumbers(num1, num2);
console.log(sum); // output: 579
