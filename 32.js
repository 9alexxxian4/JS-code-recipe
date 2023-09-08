// slice 사용하기
const a1 = '나의 노트북'.slice(3, -1);
const a2 = '나의 노트북'.slice(-6, -4);

// substring 사용하기
const b1 = '나의 노트북'.substring(3, -3);
// const b1 = '나의 노트북'.substring(3, 0);
// const b1 = '나의 노트북'.substring(0, 3);
const b2 = '나의 노트북'.substring(-4, -1);
// const b2 = '나의 노트북'.substring(0, 0);

console.log(a1);
console.log(a2);
console.log(b1);
console.log(b2);

const c1 = '반갑습니다'.slice(3, 1);
console.log(c1);

const c2 = '반갑습니다'.substring(3, 1);
console.log(c2);

'JavaScript'.slice(0, 4); // Java
'JavaScript'.slice(0); // JavaScript (두 번째 인수를 생략하면 문자열의 마지막까지 추출)
'JavaScript'.substring(0, 4); // Java
'JavaScript'.substring(0); // JavaScript (두 번째 인수를 생략하면 문자열의 마지막까지 추출)

// 문자열.slice(시작인덱스, [종료인덱스]🚨) - 지정 범위 내 문자열 추출 - 문자열 반환
// 문자열.substring(시작인덱스, [종료인덱스]🚨) - 지정 범위 내 문자열 추출 - 문자열 반환

// slice()인수는 음의 정수 사용 가능 (문자열 뒤에서부터 추출 가능, 시작 인덱스는 -1부터다)
// slice()은 시작 값이 종요 값보다 클 경우 ''(공백)을 반환

// substring()인수는 음의 정수 사용 불가능 ( 모두 0으로 간주 )
// substring()은 시작 값이 종료 값보다 클 경우 두 인덱스를 바꿔 작업을 처리한다.
