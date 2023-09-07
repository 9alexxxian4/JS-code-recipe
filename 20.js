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