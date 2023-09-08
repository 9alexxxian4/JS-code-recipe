const userName = '현';
if (userName) {
  console.log(`안녕하세요. ${userName}`);
}

const address = '';
if (address) {
  console.log(`당신은 ${address}에 살고 계시네요.`);
}

const flg = '나는 최현입니다.'.includes('현');
console.log(flg);

const flg2 = '나는 최현입니다.'.includes('현');
console.log(!flg2);

// 비교연산자를 이용하여 원하는 불리언 값을 가지고 처리할 수 있다
