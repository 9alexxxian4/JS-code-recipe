// 원시(Primitive) 타입 - 불가변성
// 객체(Object) 타입 - 가변성

// 가변성
const myArray = [1,2,3];
myArray[0] = 100;
console.log(myArray); // [100, 2, 3]

// 불가변성
let myNumber = 10;
// 10과 20은 다른 데이터
myNumber = 20;
