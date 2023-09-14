// 개인의 정보 데이터 객체
const userData = {
  id: 1,
  name: '사자',
  age: 26
};

console.log(userData.hasOwnProperty('id')); // true
console.log(userData.hasOwnProperty('address')); // false
console.log('id' in userData); // true



const userData2 = {
  id: 1,
  name: '사자',
  age: 26
};

console.log(userData.id != null); // true
console.log(userData.adress != null); // false
console.log(userData['id'] != null); // true


// 객체.hasOwnProperty(키) - 데이터 유무 확인 - 진릿값

// 키 in 객체 - 데이터의 유무 여부 반환