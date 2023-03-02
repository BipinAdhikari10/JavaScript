function calculateAreaDeclaration(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

console.log(calculateAreaDeclaration(5));

const calculateAreaExpression = function (radius) {
  const area = Math.PI * radius * radius;
  return area;
};

console.log(calculateAreaExpression(5));

const calculateAreaArrow = (radius) => {
  const area = Math.PI * radius * radius;
  return area;
};

console.log(calculateAreaArrow(5));
