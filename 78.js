let a = 100; // 변수 a에 100(원시 타입) 할당
let b = a; // 변수 b에 변수 a를 대입 (값에 의한 전달)
a = 500; // 변수 a에 500 재할당
console.log(b); // 100
console.log(a); // 500


let a2 = [1,2,3]; // 변수 a에 [1,2,3](객체 타입) 할당
let b2 = a2; // 변수 b에 변수 a를 대입 (참조에 의한 전달)
a2[0] = 100; // 변수 a[0]에 100 참조
console.log(b2); // [100,2,3]
console.log(a2); // [100,2,3]


// 전달받은 파라미터에 2를 더하는 함수
function myFunction(x) {
  x = x + 2;
}
// 변수 a3에 10 대입
let a3 = 10;
// myFunction()에 a를 전달
// 복사된 데이터 10을 함수에 전달
myFunction(a3);
// 10이 출력(2가 더해진 12가 아님을 확인)
console.log(a3); // 10


// 전달받은 배열의 첫 번째 요소에 100을 대입하는 함수
function myFunction2(x) {
  x[0] = 100;
}
// 변수 a에 [1,2,3]을 대입
let a4 = [1,2,3];
// myFunction()에 a를 전달
// 배열 데이터 [1,2,3] 메모리의 위치를 함수로 전달
myFunction2(a4);
// [100,2,3] 출력
console.log(a4); // [100,2,3]



// 원시 타입 - 값의 전달
// 객체 타입 - 참조의 전달