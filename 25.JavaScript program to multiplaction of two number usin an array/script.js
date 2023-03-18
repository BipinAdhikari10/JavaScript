function multiply(num1, num2) {
  const n1 = num1.toString();
  const n2 = num2.toString();
  const n1Len = n1.length;
  const n2Len = n2.length;
  const result = new Array(n1Len + n2Len).fill(0);

  for (let i = n1Len - 1; i >= 0; i--) {
    for (let j = n2Len - 1; j >= 0; j--) {
      const product = n1[i] * n2[j];
      const sum = result[i + j + 1] + product;
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  let startIndex = 0;
  while (result[startIndex] === 0 && startIndex < result.length - 1) {
    startIndex++;
  }

  return result.slice(startIndex).join("");
}

console.log(multiply(123, 456)); // Output: 56088
