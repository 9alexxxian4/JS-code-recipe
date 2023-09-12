const array1 = ["사과", "귤", "바나나"];
const shiftValue = array1.shift(); // 첫 위치의 요소 삭제
console.log(shiftValue); // 사과
console.log(array1); // ['귤','바나나'] (삭제 작업 후의 배열)

const array2 = ["사과", "귤", "바나나"];
const poppedValue = array2.pop(); // 마지막 위치의 요소 삭제
console.log(poppedValue); // 바나나
console.log(array2); // ['사과','귤'] (삭제 작업 후의 배열)

// 배열.shift() - 배열 첫 위치의 요소를 삭제 - 삭제된 요소 반환
// 배열.pop() - 배열 마지막 위치의 요소를 삭제 - 삭제된 요소 반환
