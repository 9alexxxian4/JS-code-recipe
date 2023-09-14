// 개인의 정보 데이터 객체
const userData = {
  id: 1,
  name: '사자',
  age: 26
};

// 키를 기준으로 루프 처리 (key값을 배열로 정렬)
console.log(Object.keys(userData)); // ['id','name','age']

// 데이터를 기준으로 루프 처리 (value값을 배열로 정렬)
console.log(Object.values(userData)); // [1,'사자',26]

// 속성을 기준으로 루프 처리 (key,value값을 배열로 정렬)
console.log(Object.entries(userData)); // [['id',1],['name','사자'],['age',26]]


// Object.keys(객체) - 객체 각 키의 배열 - 배열 반환
// Object.values(객체) - 객체 각 데이터의 배열 - 배열 반환
// Object.entries(객체) - 객체 각 속성(key,value)의 배열 - 배열 반환