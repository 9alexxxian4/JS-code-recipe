const object = {}; // 빈 객체
// 개인의 정보 데이터 객체
const person = {
  id: 1,
  name: '거북이',
  age: 28
};
// 값 확인하기
console.log(person.id); // 1
console.log(person['name']); // 거북이

// 값의 변경
person.id = 2;
person['name'] = '사자';
console.log(person.id); // 2
console.log(person['name']); // 사자
console.log(person.name); // 사자
console.log(person);
// {
//  "id": 2,
//  "name": "사자",
//  "age": 28
// }




// 존재하지 않는 속성을 불러오면 undefined 반환
const object2 = {};
console.log(object2.foo); // undefined



// API의 response 데이터를 다루는 객체
const response = {
  result: true,
  list: [{ id: 1, name: '호랑이', age: 26},
         { id: 2, name: '거북이', age: 32}]
};
// 데이터 확인
console.log(response.list[0].name); // '호랑이'
// 값의 변경
response.list[1].age = 51;
console.log(response.list[1].age); // 51



// 클래스 데이터 객체
const myClass = {
  method1: function(){
    console.log('메소드1실행');
  },
  method2: () => {
    console.log('메소드2실행');
  }
};
myClass.method2(); // '메소드2실행'