// push method%

const findEven = (arr) => {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  return even;
};
const array = [1, 2, 3, 45, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14, 16, 17];
let evenNumbers = findEven(array);
console.log(evenNumbers);

const pushArray = (cars, value) => {
  cars[cars.length] = value;
};
cars = ["Tesla", "BMW"];
pushArray(cars, "Ferrari");
console.log(cars);

const pushAnimals = (animals, value) => {
  animals[animals.length] = value;
};
animals = ["Leopard", "Tiger"];
pushAnimals(animals, "ELephant");
console.log(animals);

const pushVehicle = (vehicles, value) => {
  vehicles[vehicles.length] = value;
};
const vehicles = ["car", "van"];
pushVehicle(vehicles, "Truck");
console.log(vehicles);
