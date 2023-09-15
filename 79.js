const result = 100 + Number('200');
console.log(result); // 300

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('사자')); // true
console.log(Boolean('')); // false
console.log(String(1)); // '1'
console.log(Number('1')); // 1
console.log(Number('')); // 0
console.log(Number('사자')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// 암시형 변환
console.log(100 + '200'); // "100200" (문자열 - 숫자 100이 문자열 타입으로 변환됨)
console.log('200' - 100); // 100 (숫자 타입 - 문자열 '200'이 숫자 타입으로 변환됨)
console.log(1 == "1"); // true (숫자 1이 문자열 타입으로 변환됨)


// 자바스크립트는 동적 타입 변환을 하는 언어로, 다음과 같은 코드에서도 에러가 발생하지 않는다.
let a = 10; // a는 숫자 타입
a = '사자'; // a가 문자열 타입으로 변환됨



// Boolean(데이터) - 데이터를 진릿값 타입으로 변환 - 진릿값 변환
// String(데이터) - 데이터를 문자열 타입으로 변환 - 문자열 변환
// Number(데이터) - 데이터를 숫자 타입으로 변환 - 숫자 변환
// parseInt(문자열) - 문자열을 숫자(정수) 타입으로 변환 - 숫자 변환
// parseFloat(문자열) - 문자열을 숫자(부동 소수점) 타입으로 변환 - 숫자 변환