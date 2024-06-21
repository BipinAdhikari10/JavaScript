// Filter function

const age = [10, 20, 30];
const age1 = age.filter((age) => age > 0);
console.log(age1);

const number = [2, 3, 5, 6, 7, 9, 10, 11, 12];
const number1 = number.filter((ele) => ele % 2 === 0);
console.log(number1);

let users = [
  { name: "Bipin", age: 21, occupation: "programmer" },
  { name: "Shiva", age: 27, occupation: "programmer" },
  { name: "Hari", age: 19, occupation: "driver" },
];
let filterUser = users.filter((user) => {
  return user.age > 20 && user.occupation === "programmer";
});
console.log(filterUser);
