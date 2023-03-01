// function multiplyNumber(Num1, Num2) {
//   return Num1 * Num2;
// }
// let result = multiplyNumber(5, 2);
// console.log(result);

//Function declaration//
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression:
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const a = calcAge2;
const age3 = a(1990);
console.log(a, age3);
