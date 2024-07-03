const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.includes("Banana");
console.log(fruit);

let language = ["C", "JavaScript"];
let languages = language.includes("python");
console.log(languages);

let vehicles = ["Car", "Van", "Bus"];
let vehicle = vehicles.includes("Car");
console.log(vehicle);

const findVowels = (inputString) => {
  const vowels = "aeiouAEIOU";
  let vowel = 0;
  for (char of inputString) {
    if (vowels.includes(char)) {
      vowel++;
    }
  }
  return vowel;
};
const string = "Helloaeiou";
const result = findVowels(string);
console.log(result);
