function calcSum(...prices) {
  let result = 0;
  for (const value of prices) {
    result += value;
  }
  return result;
}

const result1 = calcSum(1, 2, 3, 4, 5);
console.log(result1);

const result2 = calcSum(5, 10, 15);
console.log(result2); 