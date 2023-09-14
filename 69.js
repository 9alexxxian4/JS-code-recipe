const obj1 = {
  result: true,
  members: [
    {id: 1, name: '여우'},
    {id: 2, name: '호랑이'},
    {id: 3, name: '사자'},
  ]
};

// 객체를 복사
const copiedObj1 = Object.assign({},obj1);

console.log(copiedObj1);
// {
//  "result": true,
//  "members": [
//   {
//     "id": 1,
//     "name": "여우"
//   },
//   {
//     "id": 2,
//     "name": "호랑이"
//   },
//   {
//     "id": 3,
//     "name": "사자"
//   }
//  ]
// }

const obj2 = {
  result: true,
  members: [
    {id: 1, name: '여우'},
    {id: 2, name: '호랑이'},
    {id: 3, name: '사자'}
  ]
};

// 객체를 복사
const copiedObj2 = {...obj2};

console.log(copiedObj2);
// {
//  "result": true,
//  "members": [
//   {
//     "id": 1,
//     "name": "여우"
//   },
//   {
//     "id": 2,
//     "name": "호랑이"
//   },
//   {
//     "id": 3,
//     "name": "사자"
//   }
//  ]
// }

// 복사 전 객체
const obj3 = {
  id: 1,
  members: ['사자','토끼','거북이']
};

// 객체의 복사
const copiedObj3 = {...obj3};

// 복사 전 객체 members 속성의 배열을 수정
obj3.members[0] = 'John';

// 복사된 members 속성의 배열도 영향을 받음
console.log(copiedObj3.members[0]); // 'John'


// {...복사대상객체} - 대상 객체의 각 요소를 분할 대입(복사)

// Object.assign({},복사대상객체) - 객체를 복사 - 객체 반환

// 스프레드 연산자와 Object.assign()은 얕은 복사이므로
// 복사 전 데이터와 복사 후의 데이터가 같은 곳을 참조한다
// 그래서 복사 전의 데이터를 수정하면 복사 후의 데이터에도 영향을 미친다.