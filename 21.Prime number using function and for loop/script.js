const primeNumber = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
let isPrime = primeNumber(23);
if (isPrime) {
  console.log("Prime number");
} else {
  console.log("Not prime number");
}
