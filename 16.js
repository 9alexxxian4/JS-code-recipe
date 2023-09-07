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
