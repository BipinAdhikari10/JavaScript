// function subtract(num1, num2) {
//   return num1 - num2;
// }

// // Example usage:
// const result = subtract(10, 5);
// console.log(result); // Output: 5

//function declaration//

// function calcRectArea(width, height) {
//   return width * height;
// }

// console.log(calcRectArea(5, 6));

// function sum(a, b) {
//   return (sum = a + b);
// }
// console.log(sum(5, 6));

// function Expression to calculate area of rectangle
// const calcRectArea2=function(width,height){
//     return width*height;
// }

// const calcRectArea3 = function (width, height) {
//   return width * height;
// };

// const calcRectArea4 = calcRectArea3;

// const area = calcRectArea4(2, 4);
// console.log(`The area is ${area} `);

// const calcRectArea5 = (width, height) => width * height;
// console.log(`The area is ${area}`);

// function volumeOfcuboid(length, breadth, height) {
//   return length * breadth * height;
// }

// const volume = volumeOfcuboid(10, 40, 50);
// console.log(`The volume of cuboid is ${volume}`);

// //Function Expression

// const volumeOfcuboid2 = function (length, breadth, height) {
//   return length * breadth * height;
// };

// //Pointing the function to another variable
// const volumeOfcuboid3 = volumeOfcuboid2;

// // calling the function:
// const volume5 = volumeOfcuboid3(10, 20, 30);
// console.log(`The volume of cuboid is ${volume5}`);

// //Arrow function

// //Declarring the arrow function
// const volumeOfcuboid5 = (length, breadth, height) => length * breadth * height;

// // Pointing the functions:
// const volumeOfcuboid6 = volumeOfcuboid5;

// //  Calling the function:
// const volume2 = volumeOfcuboid6(20, 8, 9);
// console.log(`The volume of cuboid is ${volume2}`);

function calculateAreaDeclaration(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

console.log(calculateAreaDeclaration(5));

function calculateAreaDeclaration(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

console.log(calculateAreaDeclaration(5));

const calculateAreaArrow = (radius) => {
  const area = Math.PI * radius * radius;
  return area;
};

console.log(calculateAreaArrow(5));
