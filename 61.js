const idList1 = [4, 10, 20];

const userIdList1 = idList1.map((value) => `userid_${value}`);
console.log(userIdList1); // ['userid_4','userid_10','userid_20']

const idList2 = [3, 8, 12];

const userIdList2 = idList2.map((value, index) => `userid_${index + 1}_${value}`);
console.log(userIdList2); // ['userid_1_3','userid_2_8','userid_3_12']

const apiResponseData = [
  { id: 10, name: '곰'},
  { id: 21, name: '사자'},
  { id: 31, name: '여우'}
];

const idList3 = apiResponseData.map((value) => value.id);
// 다음과 같이 작성도 가능
// const idList3 = apiResponseData.map(value => {
// return value.id
//});

console.log(idList3); // [10, 21, 31]

// 배열.map(콜백함수) - 콜백 함수로 새로운 배열 생성 - 배열 반환
// ([요소🚨],[인덱스🚨],[기존배열🚨]) => 변경후 요소 - 요소를 받아 변경 후 반환