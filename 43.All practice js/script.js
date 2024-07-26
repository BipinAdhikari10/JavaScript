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

let number = reverseNumber(7891);
console.log(number);
