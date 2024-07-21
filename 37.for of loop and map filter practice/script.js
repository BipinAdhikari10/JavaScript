// Using for of loop
const findNewArr = (arr) => {
  let newArr = [];
  for (let ele of arr) {
    if (ele > 2 && ele < 10 && ele % 2 === 0) {
      newArr.push(ele);
    }
  }
  console.log(newArr);
};
findNewArr([1, 3, 6, 8, 7, 10]);
