// // const number = [1, 2, 3, 4, 5];
// // let removedNumber = number.pop();
// // console.log(removedNumber);
// // console.log(number);

// // // delete elements
// // const fruits = ["apple", "banana", "cherry"];
// // let removedFruits = fruits.splice(1, 2);
// // console.log(removedFruits);

// // // adding elements
// // let animals = ["cat", "dog", "tiger"];
// // let addAnimals = animals.splice(1, 0, "elephant");
// // console.log(addAnimals);
// // // console.log(animals);

// // // add elements
// // let fruits = ["apple", "banana", "mango"];
// // let addFruits = fruits.splice(2, 0, "cherry", "pear");
// // console.log(addFruits);
// // console.log(fruits);

// // remove elements

// // replace elements

// // let vehicles = ["car", "taxi", "bus"];
// // let replaceVehicle = vehicles.splice(1, 1, "bike");
// // console.log(vehicles);

// // let animals = ["cat", "dog", "elephant", "lion"];
// // let removeAnimals = animals.splice(2,2);
// // console.log(removeAnimals);
// // // console.log(animals);

// // const fruits = ["apple", "banana", "mango", "orange", "tesla"];
// // let remove = fruits.splice(2, 1);
// // console.log(remove);
// // console.log(fruits);

// // let vehicles = ["car", "van", "bus", "truck"];
// // let remove = vehicles.slice(0, 1);
// // console.log(remove);

// // // square a number using map

// // let numbers = [2, 4, 6, 8];
// // let square = numbers.map((ele) => ele * ele);
// // console.log(square);

// // let array = [25, 64];
// // let arr = array.map(Math.sqrt);
// // console.log(arr);

// // let girls = [
// //   {
// //     name: "ramkali",
// //     age: 20,
// //   },
// //   {
// //     name: "harikali",
// //     age: 21,
// //   },
// // ];
// // // let findAge = girls.map((ele) => ele.age);
// // // console.log(findAge);

// // for (let key in girls) {
// //   console.log(key + ":" + girls[key]);
// // }

// // let girls = {
// //   name: "ramkali",
// //   age: 20,
// //   id: 2,
// // };
// // for (let key in girls) {
// //   console.log(key + ":" + girls[key]);
// // }

// let job = [
//   {
//     name: "Bipin",
//     age: 20,
//     occupation: "programmer",
//   },
//   {
//     name: "Hari",
//     age: "21",
//     occupation: "driver",
//   },
// ];
// let result = job.filter((ele) => ele.occupation === "driver");
// console.log(result);

// let vehicles = [
//   {
//     name: "tesla",
//     year: 2020,
//   },
//   {
//     name: "bmw",
//     year: 2020,
//   },
//   {
//     name: "creta",
//     year: 2021,
//   },

//   {
//     name: "polo",
//     year: 2021,
//   },
// ];
// let newModels = vehicles.filter(
//   (ele) => ele.year === 2021 && ele.name == "polo"
// );
// console.log(newModels);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sumOfNum = numbers.reduce((ele, acc) => {
//   return ele + acc;
// }, 0);
// console.log(sumOfNum);

// let array = [2, 3, 4, 5];
// let product = array.reduce((ele, acc) => {
//   return ele * acc;
// }, 1);
// console.log(product);

const students = [
  {
    id: 1,
    name: "ramu",
    occupation: "farmer",
    age: 20,
  },
  {
    id: 2,
    name: "ramu",
    occupation: "farmer",
    age: 23,
  },
  {
    id: 3,
    name: "ramu",
    occupation: "rider",
    age: 25,
  },
  {
    id: 4,
    name: "shyam",
    occupation: "driver",
    age: 18,
  },
];
let findAge = students.map((students) => students.occupation);
console.log(findAge);
