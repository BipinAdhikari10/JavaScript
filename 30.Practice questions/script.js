// const reverseNumber = (num) => {
//   let reversed = "";
//   for (let i = num; i >= 0; i--) {
//     console.log(i);
//   }
// };
// reverseNumber(5);

const reverseNum = (num) => {
  let stringNum = num.toString();
  let reversed = "";

  for (let i = stringNum.length; i > 0; i--) {
    let remainder = num % 10;
    num = parseInt(num / 10);
    // console.log(remainder);
    reversed = reversed + remainder;
  }
  console.log(reversed);
};
reverseNum(8792);
