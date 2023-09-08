const string = 'JavaScript를 배우자';

const a1 = 'JavaScript를 배우자'.includes('JavaScript');
console.log(a1);

const a2 = 'JavaScript를 배우자'.startsWith('배우자');
console.log(a2);

const a3 = 'JavaScript를 배우자'.endsWith('배우자');
console.log(a3);

const a4 = 'JavaScript를 배우자'.includes('배우자',12);
console.log(a4);

// 대상문자열.includes(검색대상문자열, [검색시작인덱스🚨] - 문자열 포함 여부 확인 - 불리언 값 반환
// 대상문자열.startsWith(검색대상문자열, [검색시작인덱스🚨] - 문자열 시작 문자 확인 - 불리언 값 반환
// 대상문자열.endsWith(검색대상문자열, [검색시작인덱스🚨] - 문자열 종료 문자 확인 - 불리언 값 반환
