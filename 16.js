const myFruit = '사과';

switch (myFruit) {
  case '사과':
    console.log('사과입니다.');
    break;
  case '귤':
    console.log('귤입니다.');
    break;
  default:
    console.log('기타 과일입니다.');
    break;
}

const myValue = '100';

switch (myValue) {
  case 100:
    console.log('숫자 타입의 100입니다.');
    break;
  default:
    console.log('숫자 타입의 100이 아닙니다.');
    break;
}


// switch (식)
// case 값: 처리내용  - 해당 조건 만족시 처리
// default: 처리내용  - 만족하는 조건이 하나도 없는 경우의 처리
// break;를 통해 원하는 값의 구간에 도달했을 때 반복문을 빠져 나올 수 있다.
// 물론 break를 생략하여 원하는 구간까지 도달하게끔 임의적으로 코드 작성도 가능하다.
// default도 생략이 가능하다.

// switch문의 식은 값과 타입까지 비교를 하기 때문에
// 문자열과 숫자열 등 데이터 타입을 잘 확인해야한다.
