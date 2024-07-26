// // const myInfo = [
// //   {
// //     name: "Bipin",
// //     city: "Galyang",
// //     college: "GMC",
// //     course: "BCA",
// //     // nationality: "Nepali",
// //   },
// //   {
// //     name: "Hari",
// //     city: "Taplejung",
// //     college: "BMC",
// //     course: "BBS",
// //     // nationality: "Nepali",
// //   },
// //   {
// //     name: "Shyam",
// //     city: "Dang",
// //     college: "TMC",
// //     course: "BSC",
// //     // nationality: "Nepali",
// //   },
// //   {
// //     name: "Ramu",
// //     city: "Pokhara",
// //     college: "KMC",
// //     course: "BBA",
// //     // nationality: "Nepali",
// //   },
// // ];
// // // let infoName = myInfo.map((ele) => {
// // //   return `${ele.name} ${ele.city}`;
// // // });
// // // console.log(infoName);

// // let information = myInfo.map(function (ele) {
// //   return {
// //     myName: ele.name,
// //     myAddress: ele.city,
// //     myNationality: "Nepali",
// //   };
// // });
// // console.log(information);

// // let subjectInfo = myInfo.filter((ele) => ele.course === "BBA");
// // console.log(subjectInfo);

// const anagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let count = {};
//   for (let char of str1) {
//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//   }
//   for (let char of str2) {
//     if (count[char]) {
//       count[char]--;
//     } else {
//       return false;
//     }
//   }
//   for (let key in count) {
//     if (count[key] !== 0) {
//       return false;
//     }
//   }
//   return true;
// };
// let stringAnagram = anagram("Theeyes", "Theysee");
// {
//   if (stringAnagram) {
//     console.log("anagram");
//   } else {
//     console.log("not an anagram");
//   }
// }

// const characters = ["bipin", "apple", "nall"];
// let result = characters.sort().reverse();
// console.log(result);

// const checkAnagram = (str1, str2) => {
//   let sortedStr1 = str1.toLowerCase().split("").sort().join("");
//   console.log(sortedStr1);
//   let sortedStr2 = str2.toLowerCase().split("").sort().join("");
//   return sortedStr1 === sortedStr2;
// };

// let booleanValue = checkAnagram("Listen", "Silent");
// if (booleanValue) {
//   console.log("The given strings are anagrams");
// } else {
//   console.log("The given strings are not anagram");
// }
const checkAnagram = (str1, str2) => {
  function sortString(str) {
    return str.toLowerCase().split("").sort().join("");
  }
  let string1 = sortString(str1);
  let string2 = sortString(str2);
  return string1 === string2;
};
let isAnagram = checkAnagram("TheEyes", "TheySee");
if (isAnagram) {
  console.log("anagram");
} else {
  console.log("This are not anagram");
}
