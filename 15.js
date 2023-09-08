const myPrice = 100;

if (myPrice >= 50) {
  console.log('myPrice는 50 이상입니다.');
} else if (myPrice >= 10) {
  console.log('myPrice는 10 이상 50 미만이다.');
} else {
  console.log('myPrice는 10 미만입니다.');
}

if (true) {
  console.log('Hello');
}

const randomNum = Math.random() * 10;

if (randomNum >= 5) {
  console.log(randomNum);
  console.log('5이상');
} else {
  console.log('5미만');
}

const randomNum2 = Math.random() * 10;

if (randomNum2 >= 5) console.log('5이상');


// if문의 조건식에는 불리언타입의 값인 true와 false를 반환해준다.
// 예외 처리가 없다면 if만 사용 가능하며, 예외처리가 1개씩 늘때마다 else if문을 같이 사용해준다.
// if문안에서 if문 사용도 가능하다.
