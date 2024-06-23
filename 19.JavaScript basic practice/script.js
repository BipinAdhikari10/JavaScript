// check string or number

let quantity = "12";
console.log(typeof quantity);

// Change string to number

let string = "122";
console.log(+string);

let name = "Bipin";
console.log(+name);

let strings = "10";
console.log(strings * 2);

// number to string

let num = 20;
let num1 = num.toString(8);
console.log(num1);

// Push method it is used to add new element at the end of the array

// let fruits = ["apple"];
// fruits.push("banana");
// console.log(fruits);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

// let age = prompt("Enter your age");
// if (age > 20) {
//   console.log("You are eligible to driving");
// } else {
//   console.log("You are not eligible to driving");
// }

let hour = 14;

if (hour > 10) {
  console.log("Good morning");
} else {
  console.log("Good afternoon");
}

let number = 5;

let stringNumber = number.toString();
console.log(stringNumber);
console.log(typeof stringNumber);

if (stringNumber !== 5) {
  console.log("Hello");
} else if (stringNumber === "5") {
  console.log("Hello World");
} else {
  console.log("It's today");
}

const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const user = {
  name: "Bipin",
  age: 20,
};
for (key in user) console.log(key + ":" + user[key]);

const carModels = {
  model1: "Tesla",
  model2: "BMW",
};
for (key in carModels) {
  console.log(key + ":" + carModels[key]);
}

const array = ["apple", "banana", "cherry"];
for (let i = 0; i < arr.length; i++) {
  console.log(array[i]);
}

const students = ["Bipin", "Naran", "Hari", "Shyam"];
for (element of students) {
  console.log(element);
}

let strings1 = "hellobipin";
for (bipin of strings1) {
  console.log(bipin);
}

let set = [1, 2, 10, 3, 4, 5, 6];
for (ele of set) {
  console.log(ele);
}

let studentsName = {
  name: "Bipin",
  age: 22,
};
for (key in studentsName) {
  console.log(key + ":" + studentsName[key]);
}

const salaries = {
  Bipin: 3000000,
  Ram: 1000,
};
for (key in salaries) {
  console.log(key + ":" + salaries[key]);
}
