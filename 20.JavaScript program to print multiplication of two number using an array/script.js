// Ask the user for two numbers
const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));

// Create an empty array to hold the multiplication table
const table = [];

// Use a loop to calculate and store the multiplication table in the array
for (let i = 1; i <= 10; i++) {
  const product = i * num1 * num2;
  table.push(product);
}

// Print the multiplication table to the console
console.log("Multiplication table for " + num1 + " and " + num2 + ":");
for (let i = 1; i <= 10; i++) {
  console.log(num1 + " x " + num2 + " x " + i + " = " + table[i - 1]);
}
