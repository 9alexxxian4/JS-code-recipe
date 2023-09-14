const object = {
  id: 10,
  name: '사자'
};

object.id = 12; // 속성 변경 가능
object.address = '서울'; // 속성 추가 가능


'use strict';

const object2 = {
  id: 10,
  name: '사자'
};
Object.freeze(object2);

object2.id = 12; // 속성을 변경할 수 없으므로 에러
object2.address = '서울'; // 속성을 추가할 수 없으므로 에러


'user strict';

const array1 = [1,2,3];
Object.freeze(array1);
array1.push(4); // 속성을 변경할 수 없으므로 에러


'use strict';

const object3 = {
  id: 10,
  name: '사자'
};
Object.freeze(object3);

console.log(Object.isFrozen(object3)); // true


// Object.freeze(객체) - 객체의 수정을 제한 - 객체 반환
// Object.isFrozen(객체) - 객체의 수정 제한 확인 - 진릿값 반환