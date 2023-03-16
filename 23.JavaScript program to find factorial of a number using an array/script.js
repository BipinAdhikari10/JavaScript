function factorial(num) {
  // Initialize an array with a single element 1
  let arr = [1];

  // Loop from 2 to num and multiply each number with the array
  for (let i = 2; i <= num; i++) {
    let carry = 0;

    // Multiply each digit of the array with the number
    for (let j = 0; j < arr.length; j++) {
      let product = arr[j] * i + carry;
      arr[j] = product % 10;
      carry = Math.floor(product / 10);
    }

    // Add the carry to the array
    while (carry > 0) {
      arr.push(carry % 10);
      carry = Math.floor(carry / 10);
    }
  }

  // Reverse the array and convert it to a string
  let result = arr.reverse().join("");

  return result;
}

// Example usage
console.log(factorial(5)); // Output: "120"
console.log(factorial(10)); // Output: "3628800"
