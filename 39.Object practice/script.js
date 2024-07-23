const carModels = {
  name: "Tesla",
  color: "Red",
  speed: "300KM/hr",
  music: "yes",
  fourWheels: "yes",
  seat: "five",
  airCondition: "yes",
  electric: "yes",
};
carModels.autoMode = "yes";
// delete carModels.fourWheels;
for (let key in carModels) {
  console.log(key + ":" + carModels[key]);
}
