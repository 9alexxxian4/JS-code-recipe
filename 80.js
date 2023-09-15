let a;
console.log(a); // undefined

const object = {};
console.log(object.b); // undefined

function myFunction(c) {
  console.log(`b의 값은 ${c}`);
}
myFunction(); // 'b의 값은 undefined'




// undefined - 데이터가 정의되지 않음 - undefined
// 변수에 데이터를 대입하지 않았을 때
// 객체의 속성에 값을 대입하지 않았을 때
// 파라미터에 값을 전달하지 않았을때