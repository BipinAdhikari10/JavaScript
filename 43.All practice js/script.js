const reverseNumber = (num) => {
  let string = num.toString();
  //   console.log(typeof string);
  let reverse = "";
  for (let i = 0; i <= string.length - 1; i++) {
    let remainder = num % 10;
    reverse = reverse + remainder;
    num = parseInt(num / 10);
  }
  return reverse;
};

let number = reverseNumber(2978);
console.log(number);

// let marks = 40;
// let result = marks > 40 ? "paass" : "fail";
// console.log(result);

// let age = 10;
// let vote = age > 10 ? "vote" : "no vote";
// console.log(vote);

// reverse using unshift

// let reverseArray = (arr) => {
//   let reverse = [];
//   for (i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   }
//   console.log(reverse);
// };
// reverseArray([1, 2, 3, 4]);

const reverseArray = (arr) => {
  let reverse = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    reverse.unshift(arr[i]);
  }
  console.log(reverse);
};
reverseArray([1, 2, 3, 4, 5, 6, 12]);

// reverse element using unshift

let reverseELement = (arr) => {
  let reverse = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let element = arr[i];
    reverse.unshift(element);
  }
  console.log(reverse);
};
reverseELement(["car", "van", "taxi"]);
