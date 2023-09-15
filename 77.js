const today = new Date();

console.log(today instanceof Date); // true
console.log(today instanceof Array); // false

function showCurrentDate(argument) {
  if (argument instanceof Date) {
    console.log(`현재는 ${argument.toLocaleDateString()}입니다.`);
  } else {
    console.log('적절한 데이터 타입이 아닙니다.');
  }
}

const today2 = new Date();
const myArray = [1,2,3];

showCurrentDate(today2); // 현재는 2023. 9. 15입니다.
showCurrentDate(myArray); // 적절한 데이터 타입이 아닙니다.



class MyClass1 {}
class MyClass2 {}

const myInstance1 = new MyClass1();
const myInstance2 = new MyClass2();

console.log(myInstance1 instanceof MyClass1); // true
console.log(myInstance2 instanceof MyClass1); // false

// 데이터 instanceof 객체 - 데이터가 객체의 인스턴스인지 확인