const num = parseInt(prompt("Enter a given number\n"));
for (let i = 1; i <= 10; i++) {
  const result = num * i;
  console.log(`${num}x ${i}=${result}`);
}
