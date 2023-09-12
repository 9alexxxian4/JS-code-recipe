console.log(['사과','바나나','귤'].indexOf('바나나')); // 1
console.log([0, 2, 4, 6 ,4 ,2 ,0].indexOf(4)); // 2
console.log([0, 2, 4, 6 ,4 ,2 ,0].lastIndexOf(4)); // 4

console.log(['사과','바나나','귤'].includes('바나나')); // true
console.log([0, 2, 4, 6, 8, 10].includes(3)); // false

// 배열.indexOf(검색데이터, [시작위치]🚨) - 요소의 인덱스 위치 검색하기 - 숫자 변환
// 배열.lastIndexOf(검색데이터, [시작위치]🚨) - 끝에서부터 요소 위치 검색하기 - 숫자 변환
// 배열.includes(검색데이터, [시작위치]🚨) - 요소의 포함 여부 확인하기 - 불리언 변환

// 🚨 생략 가능. 해당 배열 내 일치하는 데이터가 존재하지 않으면 -1을 반환한다.