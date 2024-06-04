// // let inputTagName = document.getElementById("username");
// // let userButton = document.getElementById("addUser");
// // let tableBody = document.getElementById("records");

// // tableBody.innerHTML = "";

// // let submittedData = [];

// // let edit_index = null;

// // userButton.addEventListener("click", () => {
// //   let enteredName = inputTagName.value;

// //   let submitForm = {
// //     name: enteredName,
// //   };
// //   if (edit_index != null) {
// //     submittedData.splice(edit_index, 1, submitForm);
// //     edit_index = null;
// //   } else {
// //     submittedData.push(submitForm);
// //   }
// //   inputTagName.value = "";
// //   userButton.innerText = "Add User";
// //   displayTable();
// // });
// // function displayTable() {
// //   html = "";
// //   submittedData.forEach(function (user, index) {
// //     html += ` <tr>
// //         <td>${index}</td>
// //         <td>${user.name}</td>
// //         <td>
// //           <i class="btn text-white fa fa-edit btn-info mx-2" onclick='editInformation (${index})'></i>
// //           <i class="btn btn-danger text-white fa fa-trash"onclick= 'deleteInformation (${index})'></i>
// //         </td>
// //       </tr>`;
// //   });
// //   tableBody.innerHTML = html;
// // }
// // function editInformation(index) {
// //   edit_index = index;
// //   inputTagName.value = submittedData[index].name;
// //   userButton.innerText = "Save edited data";
// // }
// // function deleteInformation(index) {
// //   submittedData.splice(index, 1);
// //   displayTable();
// // }

// let inputTagName = document.getElementById("username");
// let userButton = document.getElementById("addUser");
// let tableBody = document.getElementById("records");

// tableBody.innerHTML = "";

// let submittedData = [];

// let edit_index = null;

// userButton.addEventListener("click", () => {
//   let enteredName = inputTagName.value;
//   console.log("enteredName", enteredName);
//   let submitForm = {
//     name: enteredName,
//   };
//   console.log("submitForm", submitForm);
//   if (edit_index != null) {
//     submittedData.splice(edit_index, 1, submitForm);
//     edit_index = null;
//   } else {
//     submittedData.push(submitForm);
//     console.log("SubmittedDataArray", submittedData);
//   }
//   inputTagName.value = "";
//   userButton.innerText = "Add User";
//   displayTable();
// });

// function displayTable() {
//   let html = "";

//   submittedData.forEach(function (user, index) {
//     html += `   <tr>
//         <td>${index + 1}</td>
//         <td>${user.name}</td>

//         <td>
//           <i class="btn text-white fa fa-edit btn-info mx-2"  onclick='editInformation(${index})'>${index}</i>
//           <i class="btn btn-danger text-white fa fa-trash"onclick='deleteInformation(${index})'> ${index} </i>
//         </td>
//       </tr>`;
//   });
//   console.log(html);
//   tableBody.innerHTML = html;
// }

// function editInformation(index) {
//   edit_index = index;
//   inputTagName.value = submittedData[index].name;
//   userButton.innerText = "Save edited data";
// }

// function deleteInformation(index) {
//   submittedData.splice(index, 1);
//   displayTable();
// }

// let arr = [{ name: "Shiva", suranme: "bipin", height: "Ram" }];
// console.log(arr[0].name);

// let obj = { name: "Shiva", surname: "Adhikari", height: 3 };
// console.log(obj.surname);

let bipinInfo = [
  {
    name: "Bipin",
    surname: "Adhikari",
    school: ["Ginchaur", { class: [2, 3, 4] }, "Galkot", { class: [5, 6] }],
    friends: [
      { name: "Keshab", country: "Japan" },
      {
        name: "Naran",
        country: "USA",
      },
    ],
  },
];
console.log(bipinInfo[0].friends.length);

// console.log(
//   `I am ${bipinInfo[0].name} ${bipinInfo[0].surname}. I have studied in ${bipinInfo[0].school[0]} and ${bipinInfo[0].school[2]}.
//   In ${bipinInfo[0].school[0]},I studied in ${bipinInfo[0].school[1].class[0]},${bipinInfo[0].school[1].class[1]} and ${bipinInfo[0].school[1].class[2]}
//   and in ${bipinInfo[0].school[2]} I studied in ${bipinInfo[0].school[3].class[0]} and ${bipinInfo[0].school[3].class[1]} class. I have
//    ${bipinInfo[0].friends.length}  friends
//   and their name are ${bipinInfo[0].friends[0].name} and ${bipinInfo[0].friends[1].name}.  lives in ${bipinInfo[0].friends[1].country}`
// );

// const Info = [
//   {
//     country: "Nepal",
//     Religion: [
//       { religion: "Hindu", speak: ["Nepali", [5, 6], "Dashain"] },
//       { religion: "Buddhist", speak: ["Newari", [10, 15], "Buddha Jayanti"] },
//       {
//         religion: "Christian",
//         speak: [
//           "English",
//           {
//             count: "2%",
//             festival: "Christmas",
//           },
//         ],
//       },
//     ],
//   },
//   "All the best",
//   "Programming",
//   {
//     country: "India",
//     Religion: ["Sikh", "Ishai"],
//     crickters: [
//       {
//         name: "Kholi",
//         Team: ["India", "RCB"],
//         Trophy: [
//           {
//             country: 5,
//             RCB: 0,
//             MI: 0,
//           },
//         ],
//       },
//       {
//         name: "Rohit",
//         Team: ["India", "MI"],
//         Trophy: [
//           {
//             country: 5,
//             RCB: 0,
//             MI: 5,
//           },
//         ],
//       },
//     ],
//   },
// ];
// console.log(Info[2]);

// console.log(
//   `I live in ${Info[0].country}.Here, People follow ${Info[0].Religion[0].religion.length} big religion ${Info[0].Religion[0].religion}
//   ,${Info[0].Religion[1].religion} and ${Info[0].Religion[2].religion} are the big religion,${Info[0].Religion[0].religion}'s speak
//   ${Info[0].Religion[0].speak[0]} and celebrate ${Info[0].Religion[0].speak[1][0]} to ${Info[0].Religion[0].speak[1][1]} festivals.
//   ${Info[0].Religion[0].speak[2]} is the main festival.${Info[0].Religion[1].speak[0]} speaked by ${Info[0].Religion[1].religion} Being
//   ${Info[0].Religion[1].speak[2]}, the biggest festival, they celebrate ${Info[0].Religion[1].speak[1][0]} -${Info[0].Religion[1].speak[1][1]}
//   festivals.${Info[0].Religion[2].religion} is followed by ${Info[0].Religion[2].speak[1].count} of the people and celebrate ${Info[0].Religion[2].speak[1].festival}

//   ${Info[3].crickters[0].name} and  ${Info[3].crickters[1].name} are the biggest player of ${Info[3].country}.
//   Both of them are ${Info[0].Religion[0].religion},They play for ${Info[3].crickters[0].Team[1]},${Info[3].crickters[1].Team[1]}
// and ${Info[3].country}, with ${Info[3].crickters[0].Trophy[0].country} Trophy for India. ${Info[3].crickters[1].name} has
//  ${Info[3].crickters[1].Trophy[0].MI} IPL trophies whereas ${Info[3].crickters[0].name} has ${Info[3].crickters[1].Trophy[0].RCB}
//  because he plays for ${Info[3].crickters[0].Team[1]}

//  Wish me ${Info[1]} for  ${Info[2]}
//  `
// );

// console.log(Info);
// console.log(Info[0]);
// console.log(Info[0].country);
// console.log(Info[0].Religion.length);

// console.log(Info);

const data = [
  {
    country: "Brazil",

    Religion: [
      {
        religion: "Catholic",
        speak: ["Portuguese", [3, 7], "Carnival"],
        population: {
          percentage: "64.6%",
          major_areas: ["Rio de Janeiro", "Sao Paulo"],
        },
      },
      {
        religion: "Protestant",
        speak: ["Portuguese", [2, 5], "Festa Junina"],
        population: {
          percentage: "22.2%",
          major_areas: ["Bahia", "Brasilia"],
        },
      },
      {
        religion: "Spiritist",
        speak: [
          "Portuguese",
          {
            count: "2.2%",
            festival: "Day of the Dead",
            centers: [
              {
                name: "Spiritist Center of Sao Paulo",
                city: "Sao Paulo",
                capacity: 300,
              },
              {
                name: "Spiritist Union of Rio",
                city: "Rio de Janeiro",
                capacity: 200,
              },
            ],
          },
        ],
      },
    ],
    Education: {
      primary: "4 years",
      secondary: "4 years",
      higher_secondary: "3 years",
      universities: [
        {
          name: "University of Sao Paulo",
          founded: 1934,
          students: 90000,
        },
        {
          name: "Federal University of Rio de Janeiro",
          founded: 1920,
          students: 65000,
        },
      ],
    },
  },
  "Good luck",
  "Artificial Intelligence",
  {
    country: "Japan",
    Religion: [
      {
        religion: "Shinto",
        population: {
          percentage: "48%",
          major_areas: ["Tokyo", "Kyoto"],
        },
      },
      {
        religion: "Buddhism",
        population: {
          percentage: "46%",
          major_areas: ["Osaka", "Nara"],
        },
      },
    ],
    Athletes: [
      {
        name: "Shohei Ohtani",
        Sport: ["Baseball", "Pitcher"],
        Awards: [
          {
            MLB: 1,
            NPB: 1,
            WBC: 1,
          },
        ],
        statistics: {
          games: 150,
          home_runs: 45,
          ERA: 2.52,
        },
      },
      {
        name: "Naomi Osaka",
        Sport: ["Tennis", "Singles"],
        Awards: [
          {
            GrandSlams: 4,
            WTA: 7,
            Olympics: 1,
          },
        ],
        statistics: {
          matches: 100,
          wins: 85,
          losses: 15,
        },
      },
    ],
    Education: {
      primary: "6 years",
      secondary: "3 years",
      higher_secondary: "3 years",
      universities: [
        {
          name: "University of Tokyo",
          founded: 1877,
          students: 30000,
        },
        {
          name: "Kyoto University",
          founded: 1897,
          students: 22000,
        },
      ],
    },
  },
  {
    country: "Australia",
    Religion: [
      {
        religion: "Christianity",
        population: {
          percentage: "52%",
          major_areas: ["Sydney", "Melbourne"],
        },
      },
      {
        religion: "No Religion",
        population: {
          percentage: "30%",
          major_areas: ["Brisbane", "Perth"],
        },
      },
    ],
    Leaders: [
      {
        name: "Scott Morrison",
        term: "2018-2022",
        party: "Liberal",
      },
      {
        name: "Julia Gillard",
        term: "2010-2013",
        party: "Labor",
        achievements: [
          "National Broadband Network",
          "DisabilityCare Australia",
        ],
      },
    ],
    Sports: {
      popular_sports: ["Cricket", "Rugby", "Soccer"],
      major_events: [
        {
          name: "Melbourne Cup",
          sport: "Horse Racing",
          audience: "10 million",
        },
        {
          name: "Australian Open",
          sport: "Tennis",
          audience: "30 million",
        },
      ],
    },
  },
];

console.log(data);
