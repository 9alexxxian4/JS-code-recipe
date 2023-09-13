let a;
let b;
let c;
[a,b,c] = [1,2,3];
console.log(a,b,c); // 1,2,3

// 분할 대입은 다음과 같이 배열 내 값의 변경이나 요소의 위치를 변경할 수도 있다.
const array = ['곰','여우'];
[array[0], array[1]] = [array[1], array[0]];
console.log(array); // ['여우','곰']
// 배열 내 요소의 순서가 변함

// [변수1, 변수2, 변수3] = [값1, 값2, 값3] - 각 변수에 값을 대입