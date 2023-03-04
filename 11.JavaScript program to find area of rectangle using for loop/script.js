// Define the width and height of the rectangle
let width = 5;
let height = 10;

// Define a variable to store the area of the rectangle
let area = 0;

// Use a for loop to calculate the area of the rectangle
for (let i = 0; i < height; i++) {
  // For each row of the rectangle, add the width to the area
  area += width;
}

// Print the area of the rectangle to the console
console.log("The area of the rectangle is " + area);
