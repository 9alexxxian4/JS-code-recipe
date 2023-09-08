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

// 파라미터의 개수가 정해지지 않았을 때 '...파라미터'(나머지 파라미터 - Rest Parameter)를 사용할 수 있다.
// 다만, 함수의 파라미터는 2개 이상 많으면 좋지 않다.(JS deep dive)
