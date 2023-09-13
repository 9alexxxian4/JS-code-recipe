// 3개의 값을 가지는 배열
const priceList = [100, 500, 900];
// 합계를 저장하는 변수
const sum = priceList.reduce((pre, cur) => {
  return pre + cur;
});
// 다음과 같이 생략 가능
// priceList.reduce((pre, cur) => pre + cur);
console.log(sum); // 1500



// for...of 문을 사용하여 계산
// 3개의 값을 가지는 배열
const priceList2 = [100, 500, 900];
// 합계를 저장하는 변수
let sum2 = 0;
// 루프 처리를 사용한 계산
for (const price of priceList) {
  sum2 += price;
}
console.log(sum2); // 1500



// 2차 배열을 1차 배열로 만드는 플래트닝에도 사용할 수 있다.
const array = [['바나나', '사과', '딸기'],['귤','포도']];
const flattenedArray = array.reduce((pre, cur) => {
  return pre.concat(cur);
});
console.log(flattenedArray); // ['바나나','사과','딸기','귤','포도']



// reduceRigth는 우에서 좌의 순서
const array2 = ['사자','여우','호랑이'];
const members1 = array2.reduce((pre, cur) => {
  return `${pre}와 ${cur}`;
});
console.log(members1); // 사자와 여우와 호랑이

const members2 = array2.reduceRight((pre, cur) => {
  return `${pre}와 ${cur}`;
});
console.log(members2); // 호랑이와 여우와 사자



// 배열.reduce(콜백함수,[초기화🚨]) - 요소(좌 -> 우)를 처리하여 하나의 값 생성 - 임의 지정값 반환
// 배열.reduceRight(콜백함수,[초기화🚨]) - 요소(우 -> 좌)를 처리하여 하나의 값 생성 - 임의 지정값 반환
// ((이전요소,현재요소,인덱스,기존배열) => {처리내용}) - 임의의 값 처리