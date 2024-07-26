const myInfo = [
  {
    name: "Bipin",
    city: "Galyang",
    college: "GMC",
    course: "BCA",
    // nationality: "Nepali",
  },
  {
    name: "Hari",
    city: "Taplejung",
    college: "BMC",
    course: "BBS",
    // nationality: "Nepali",
  },
  {
    name: "Shyam",
    city: "Dang",
    college: "TMC",
    course: "BSC",
    // nationality: "Nepali",
  },
  {
    name: "Ramu",
    city: "Pokhara",
    college: "KMC",
    course: "BBA",
    // nationality: "Nepali",
  },
];
// let infoName = myInfo.map((ele) => {
//   return `${ele.name} ${ele.city}`;
// });
// console.log(infoName);

let information = myInfo.map(function (ele) {
  return {
    myName: ele.name,
    myAddress: ele.city,
    myNationality: "Nepali",
  };
});
console.log(information);

let subjectInfo = myInfo.filter((ele) => ele.course === "BBA");
console.log(subjectInfo);
