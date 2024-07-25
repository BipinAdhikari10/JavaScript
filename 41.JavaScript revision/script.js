// const number = [1, 2, 3, 4, 5];
// let removedNumber = number.pop();
// console.log(removedNumber);
// console.log(number);

// // delete elements
// const fruits = ["apple", "banana", "cherry"];
// let removedFruits = fruits.splice(1, 2);
// console.log(removedFruits);

// // adding elements
// let animals = ["cat", "dog", "tiger"];
// let addAnimals = animals.splice(1, 0, "elephant");
// console.log(addAnimals);
// // console.log(animals);

// // add elements
// let fruits = ["apple", "banana", "mango"];
// let addFruits = fruits.splice(2, 0, "cherry", "pear");
// console.log(addFruits);
// console.log(fruits);

// remove elements

// replace elements

// let vehicles = ["car", "taxi", "bus"];
// let replaceVehicle = vehicles.splice(1, 1, "bike");
// console.log(vehicles);

// let animals = ["cat", "dog", "elephant", "lion"];
// let removeAnimals = animals.splice(2,2);
// console.log(removeAnimals);
// // console.log(animals);

// const fruits = ["apple", "banana", "mango", "orange", "tesla"];
// let remove = fruits.splice(2, 1);
// console.log(remove);
// console.log(fruits);

let vehicles = ["car", "van", "bus", "truck"];
let remove = vehicles.slice(0, 1);
console.log(remove);

// square a number using map

let numbers = [2, 4, 6, 8];
let square = numbers.map((ele) => ele * ele);
console.log(square);

let array = [25, 64];
let arr = array.map(Math.sqrt);
console.log(arr);
