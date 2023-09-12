// 비교 함수 없이 정렬
const arr1 = ['grape','Orange','apple'];
arr1.sort();
console.log(arr1); //['Orange','apple','grape']

// 비교 함수에 localeCompare를 사용
const arr2 = ['grape','Orange','apple'];
arr2.sort((a,b) => a.localeCompare(b));
console.log(arr2); // ['apple','grape','Orange']

// 문자열1.localeCompare(문자열2) - 문자열1과 문자열2 비교 - 숫자 반환