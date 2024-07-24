let array = [2, 4, 6, 8, 10, 12, 15, 16, 20];
let newArray = array.filter((val) => val > 10 && val % 2 == 0);
console.log(newArray);

let data = [
  {
    name: "Bipin",
    position: "developer",
  },

  {
    name: "Ram",
    position: "driver",
  },
  {
    name: "LalGopal",
    position: "Engineer",
  },
];
let dataResult = data.filter((val) => val.position === "developer");
console.log(dataResult);
