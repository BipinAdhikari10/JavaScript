function areaOfrect(length, width) {
  return length * width;
}
result = areaOfrect(5, 6);
console.log(`The area of rectangle is ${result}`);

//Expression function

const areaOfrect2 = function (length, width) {
  return length * width;
};
const areaOfrect3 = areaOfrect2;
const areaOfrect4 = areaOfrect3(40, 10);
console.log(`The area of rectangle is ${areaOfrect4}`);

const areaOfrect5 = (length, width) => length * width;

const areaOfrect6 = areaOfrect5;

const areaOfrect7 = areaOfrect6(20, 10);
console.log(`The area of rectangle is ${areaOfrect7}`);

const calcaverage=(a,b,c) =>a+b+c/3;

const calcaverage2=calcaverage;
const calcaverage3=calcaverage2(4,5,6);

console.log