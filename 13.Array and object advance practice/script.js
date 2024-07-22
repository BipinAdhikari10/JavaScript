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

// Getting religion:
let ReligionOfBrazil = data[0]["Religion"][0]["population"]["major_areas"][0];
console.log(ReligionOfBrazil);

// console.log(data[0].Education.secondary);

console.log(data[0].Religion[0].religion);

console.log(`I have the data of ${ReligionOfBrazil[0].speak[1][0]} countries
 ${data[0].country}:
I will talk about ${ReligionOfBrazil[0].speak[1][0]} religions. They are ${ReligionOfBrazil[0].religion},${ReligionOfBrazil[1].religion},${ReligionOfBrazil[2].religion}.
The percantage of people who speak ${ReligionOfBrazil[0].speak[0]} is ${ReligionOfBrazil[0].population.percentage}
The carnival is celeberated by ${ReligionOfBrazil[0].speak[1][0]} to ${ReligionOfBrazil[0].speak[1][1]} people.
The major area where ${ReligionOfBrazil[0].religion} is done is ${data[0].Religion[0].population.major_areas[0]} and ${data[0].Religion[0].population.major_areas[1]}
another language is ${data[0].Religion[1].speak[2]}, major cities are ${data[0].Religion[1].population.major_areas[0]} and ${data[0].Religion[1].population.major_areas[1]},
percentage covered is ${data[0].Religion[1].population.percentage}, another religion is ${data[0].Religion[2].religion} and major centeres are ${data[0].Religion[1].speak[1][0]} and capacity 
for ${data[0].Religion[2].speak[1].centers[0].name} is ${data[0].Religion[2].speak[1].centers[0].capacity} and ${data[0].Religion[2].speak[1].centers[1].name} is 
${data[0].Religion[2].speak[1].centers[1].capacity} Education is of ${data[0].Education.primary},${data[0].Education.higher_secondary}, and 

${data[0].Education.secondary}

`);
