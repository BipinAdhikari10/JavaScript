// const arrayKoAgadiThapniFunction = function (arr, ...arguments) {
//   console.log(arguments);
//   // Shift array to right
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr[i + arguments.length] = arr[i];
//   }
//   //Add new element at the beggining
//   for (let j = 0; j <= arguments.length - 1; j++) {
//     arr[j] = arguments[j];
//   }

//   return arr.length;
// };

// making unshift function
Array.prototype.myUnshift = function (...arguments) {
  console.log(arguments);
  // Shift array to right
  for (let i = this.length - 1; i >= 0; i--) {
    this[i + arguments.length] = this[i];
  }
  //Add new element at the beggining
  for (let j = 0; j <= arguments.length - 1; j++) {
    this[j] = arguments[j];
  }

  return this.length;
};
let arr = [2, 5, 6];
myUnshift(10, 5);
