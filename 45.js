const array1 = []; // 빈 배열
const array2 = [0, 2, 8]; // '0','2','8'이 들어 있는 데이터 타입
const array3 = ['곰','여우']; // '곰','여우'가 들어있는 데이터 타입
const array4 = [1,'곰',false]; // '1','곰','false'가 들어 있는 데이터 타입
const array5 = [[1,1,1],[2,2,2]];
// [1,1,1],[2,2,2]가 들어가 있는 데이터 타입
const array6 = [{ id:1 , name: '곰'},{ id:2, name:'곰'}];
// 두 개의 객체가 들어 있는 데이터 타입
const array7 = ['곰','여우']; 
// '곰','여우'가 들어 있는 데이터 타입;
console.log(array7[0]); // '곰'
console.log(array7[1]); // '여우'

const array8 = new Array('곰','여우');
console.log(array8[0]); // '곰'
console.log(array8[1]); // '여우'

const array9 = new Array(10); // 10개의 데이터를 넣을 수 있는 배열
array9[0] = '곰';
console.log(array9);
// '곰',,,,,,,,,