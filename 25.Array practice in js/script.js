// // const factorialNum = (num) => {
// //   let factorial = 1;
// //   for (let i = 1; i <= num; i++) {
// //     factorial = factorial * i;
// //   }
// //   console.log(factorial);
// // };
// // factorialNum(5);

// // const sumArray = (array) => {
// //   let sum = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     sum = sum + array[i];
// //   }
// //   return sum;
// // };
// // const number = [2, 4, 5];
// // let addition = sumArray(number);
// // console.log(addition);

// // const buggyLoop = () => {
// //   let numbers = [1, 2, 3, 4, 5];
// //   for (let i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i]);
// //   }
// // };
// // // buggyLoop();

// // function isPrime(num) {
// //   for (let i = 2; i <= Math.sqrt(num); i++) {
// //     if (num % i === 0) {
// //       return false;
// //     }
// //   }
// //   return num > 1;
// // }
// // function printPrimeNumbers(n) {
// //   for (let i = 2; i <= n; i++) {
// //     if (isPrime(i)) {
// //       console.log(i);
// //     }
// //   }
// // }
// // printPrimeNumbers(100);

// // const findEven = (array) => {
// //   let even = [];
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] % 2 === 0) {
// //       even.push(array[i]);
// //     }
// //   }
// //   return even;
// // };
// // const array = [1, 2, 3, 4, 5];
// // let evenNumbers = findEven(array);
// // console.log(evenNumbers);

// // const findOddNumbers = (arr) => {
// //   let odd = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 !== 0) {
// //       odd.push(arr[i]);
// //     }
// //   }
// //   return odd;
// // };
// // console.log(findOddNumbers([1, 2, 3, 4, 5]));

// // Push
// // adding one or more element to an array

// // const fruits = ["Apple", "Banana", "Cat"];
// // let fruit = fruits.push("Mango");
// // console.log(fruits);

// // //

// // const animals = ["leopard", "Tiger"];
// // let animal = animals.unshift("Lion");
// // console.log(animals);

// // const vehicles = ["Car", "Van"];
// // let vehicle = vehicles.push("Truck", "Bike");
// // console.log(vehicles);
// // console.log(vehicle);

// // .push Adding one or more element at the end of an array

// const vehicles = ["car", "Van"];

// let vehicle = vehicles.push("Truck", "Bike");
// console.log(vehicles);

// // .unshift Adding one or more element to the begginging of an array

// const animals = ["Tiger"];
// let addAnimals = animals.unshift("Lion", "Leopard", "Elephant");
// console.log(animals);

// //pop It is used to remove last element from an array

// const cars = ["Tesla", "BMW"];
// let remvoedCar = cars.pop();
// console.log(remvoedCar);
// console.log(cars);

// shift It is used to remove first element from an array and return element

// const bikes = ["Duke", "Fz"];
// let removedBike = bikes.shift();
// console.log(removedBike);
// console.log(bikes);

// // splice
// // It can be add remove replace in an array

// // Removing element from an array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let removedNumbers = numbers.splice(2, 2);
// console.log(removedNumbers);
// console.log(numbers);

// // Adding

// let array = [2, 4, 5, 8];
// let newArray = [4, 8, 10, 16];

// const doubleArray = (arr) => {
//   let numbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     numbers.push(arr[i] * 2);
//   }
//   console.log(numbers);
// };
// doubleArray(array);
// doubleArray(newArray);

const doubleArrayNum = (arr) => {
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    numbers.push(arr[i] * 2);
  }
  return numbers;
};
console.log(doubleArrayNum([2, 4, 5, 6, 8, 10]));

const findEvenNumbers = (array) => {
  let even = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    }
  }
  return even;
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
let evenNumbers = findEvenNumbers(array);
console.log(evenNumbers);

const vehicle = ["car", "van", "Tesla", "BMW"];
let removedVehicle = vehicle.splice(1, 2);
console.log(removedVehicle);
console.log(vehicle);

const vehicle1 = ["Car", "Tesla", "BMW", "creta"];
let addVehicle = vehicle1.splice(1, 2, "Truck", "Bus");
console.log(addVehicle);
console.log(vehicle1);

const colors = ["Red", "Blue"];
let color = colors.splice(1, 0, "Yellow");
console.log(colors);

// join
// array to string

const names = ["Bipin", "Adhikari"];
let name = names.join(" ");
console.log(name);

// split string to array

const name1 = "Bipin Adhikari";
let name2 = name1.split("");
console.log(name2);

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
const combined = array1.concat(array2);
console.log(combined);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);
