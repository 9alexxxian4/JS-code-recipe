function calcFunction(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}

const result1 = calcFunction(100);
console.log(result1);

const result2 = calcFunction(100, 0.1);
console.log(result2);


// 함수의 파라미터의 초깃값을 설정할 수 있고,
// 함수의 파라미터를 넣어줄 때 초깃값을 변경하지 않는다면 초깃값으로 적용되어 반환해주고
// 함수의 파라미터를 넣어줄 때 초깃값을 변경해서 사용하면 변경된값으로 적용되어 반환해준다.
