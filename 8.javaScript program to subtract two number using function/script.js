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

function volumeOfcuboid(Length, breadth, height) {
  return length * breadth * height;
}
const length = 10;
const breadth = 20;
const height = 30;

const volume = volumeOfcuboid(length, breadth, height);
console.log(`The volume of cuboid is ${volume}`);

//Function Expression

const volumeOfcuboid2 = function (length, breadth, height) {
  return length * breadth * height;
};
const volumeOfcuboid3 = volumeOfcuboid2;
const volumeOfcuboid4 = volumeOfcuboid3(10, 20, 30);
console.log(`The volume of cuboid is ${volume}`);

//Arrow function

const volumeOfcuboid5 = (Length, breadth, height) => length * breadth * height;
console.log(`The volume of cuboid is ${volume}`);
