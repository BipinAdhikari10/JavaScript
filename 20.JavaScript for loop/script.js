// const sum = () => {
//   console.log(5 + 3);
// };
// for (let i = 0; i < 4; i++) {
//   sum();
// }

const sum = (num1, num2, num3) => {
  console.log(num1 + num2 + num3);
};
for (let i = 1; i < 4; i++) {
  sum(i, i + 1, i + 2);
}
