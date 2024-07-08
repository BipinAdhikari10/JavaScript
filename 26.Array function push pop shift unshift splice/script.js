// // push method%

// const findEven = (arr) => {
//   let even = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     }
//   }
//   return even;
// };
// const array = [1, 2, 3, 45, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14, 16, 17];
// let evenNumbers = findEven(array);
// console.log(evenNumbers);

// let result = pushArray(["Tiger", "Lion"], "leopard");
// console.log(result);

// const pushAnimals = (animals, value) => {
//   animals[animals.length] = value;
// };
// animals = ["Leopard", "Tiger"];
// pushAnimals(animals, "ELephant");
// console.log(animals);

// const pushVehicle = (vehicles, value) => {
//   vehicles[vehicles.length] = value;
// };
// const vehicles = ["car", "van"];
// pushVehicle(vehicles, "Truck");
// console.log(vehicles);

// // Splice method

// const fruits = ["apple", "banana", "mango", "pear"];
// let removedFruits = fruits.splice(1, 2, "orange");
// console.log(fruits);
// console.log(removedFruits);

// const name = ["Bipin", "Ram", "Shiva", "Bandhu", "Harilal", "Shyam"];
// let removedName = name.splice(1, 2);
// console.log(removedName);
// console.log(name);

// const city = ["Kathmandu", "Pokhara", "Delhi", "Dubai"];
// let removedCity = city.splice(1, 2, "Kolkata");
// console.log(removedCity);
// console.log(city);

// const country = ["Nepal", "Argentina", "Australia", "Canada", "Spain"];
// const addAndRemoveCountry = country.splice(1, 2, "Mongolia", "Croatia");
// console.log(addAndRemoveCountry);
// console.log(country);

// const footballPlayers = [
//   "Messi",
//   "Ronaldo",
//   "Neymar",
//   "Suarez",
//   "Dimaria",
//   "Martinez",
// ];
// const removedPlayers = footballPlayers.splice(5, 3);
// console.log(removedPlayers);

// const pushArray = (cars, value) => {
//   cars[cars.length] = value;
//   return cars.length;
// };
// let cars = ["Tesla", "BMW"];
// let returnValue = pushArray(cars, "Ferrari");
// console.log(cars);
// console.log(returnValue);

// const unshiftArray = (value, animals) => {
//   //   console.log(animals);
//   //   console.log(value);
//   animals[0] = value;
//   //   console.log(animals);
//   return animals.length;
// };
// let animals = ["leopard", "Tiger"];
// let returnvalues = unshiftArray("Lion", animals);
// console.log(animals);
// console.log(returnvalues);

// const unshiftArray = (value, animals) => {
//   animals = [animals.length];
//   return animals.length;
// };
// let animals = ["leopard", "tiger"];
// let returnValue = unshiftArray("Lion", animals);
// console.log(returnValue);
// console.log(animals);

// const pushArray = (animals, value) => {
//   animals[animals.length] = value;
//   return animals.length;
// };
// const animals = ["Leopard", "Tiger"];
// let returnValue = pushArray(animals, "Elephant");

// console.log(animals);

// console.log(returnValue);

// // unshift

// const popArray = (friends) => {
//   friends[friends.length];
//   return friends.length - 1;
// };
// const friends = ["Bipin", "Ram", "Shyam"];
// let returnValue = popArray(friends);
// console.log(friends);

// const unshiftArray = (value, cars) => {
//   cars[0] = value;
//   return cars.length;
// };

// const cars = ["BMW", "Ferrari"];
// let returnCar = unshiftArray("Tesla", cars);
// console.log(cars);
// console.log(returnCar);

// const pushArray = (vehicles, value) => {
//   vehicles[vehicles.length] = value;
//   return vehicles.length;
// };
// const vehicles = ["car", "van"];
// let returnVehicles = pushArray(vehicles, "truck");
// console.log(vehicles);
// console.log(returnVehicles);

// const unshiftArray = (value, carmodels) => {
//   carmodels[0] = value;
//   return carmodels.length;
// // };
// const carmodels = ["honda", "suzuki"];
// // let returnCarModels = unshiftArray("Toyota", carmodels);
// // console.log(carmodels);

// let days = ["Sunday", "Monday", "Friday"];

// let months = ["Jan", "Feb", "March"];

// Array.prototype.helloWorld = () => {
// //   console.log("Hello world");
// };

// months.helloWorld();
// carmodels.helloWorld();
// console.log(Array
//     .prototype);

// const add = (...num) => {
//   console.log(num);
// };
// add(1, 2, 3);

// const number = (...num) => {
//   console.log(num);
// };
// number(1, 2, 3, 4);

Array.prototype.myUnshift = function (...parameters) {
  console.log(this);
  console.log(parameters);
  // shift existing array to right
  for (let i = this.length - 1; i >= 0; i--) {
    console.log(this);
    this[i + parameters.length] = this[i];
  }

  // Add new elements at begining
  for (let j = 0; j < parameters.length; j++) {
    this[j] = parameters[j];
  }

  return this.length;
};
let animals = ["tiger", "lion", "leopard"];
let vehicles = ["Car", "Jeep", "Van"];
let returnVehicle = animals.myUnshift("Bus", "Truck");
console.log(returnVehicle);
console.log(vehicles);

console.log(["shiva", "bipin", "bandu"][2]);
