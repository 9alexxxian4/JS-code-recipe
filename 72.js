const userData1 = {
  id: 1,
  name: '사자',
  age: 26
};

const { id, name, age } = userData1;

console.log(id); // 1 (userData1.id값)
console.log(name); // 사자 (userData1.name값)
console.log(age); // 26 (userData1.age값)


const userData2 = {
  id: 1,
  name: '사자',
  age: 26
};

const { age2, id2, address } = userData2;

console.log(age); // 26 (userData.age값)
console.log(id); // 1 (userData.id값)
console.log(address); // undefined (userData.address는 존재하지 않음)



const userData3 = {
  id: 1,
  name: '사자'
};

// name 키의 값을 myName에 대입
const { name: myName } = userData3;

console.log(myName); // '사자' (userData.name값)



// {변수1, 변수2, ...} = 객체 - 객체의 데이터를 각 변수에 대입