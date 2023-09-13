const array = [1,2,3,4,5];
const arrayLength = array.length;
// 피셔 예이츠 알고리즘
for (let i = arrayLength - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
}
console.log(array); // [요소의 값이 랜덤으로 정렬]

// 재사용할 수 있도로 처리 작업을 함수로 만들면 편리하다.
const array1 = [1,2,3,4,5,6,7,8,9,10];
const shuffled1 = shuffleArray(array1);
console.log(shuffled1); // [요소의 값이 랜덤으로 정렬]

const array2 = ['사자','여우','곰','호랑이','기린'];
const shuffled2 = shuffleArray(array2);
console.log(shuffled2); [요소의 값이 랜덤으로 정렬]

function shuffleArray(sourceArr) {
  // 기존 배열의 복제 생성
  const array = sourceArr.concat();
  // 피셔 예이츠 알고리즘
  const arrayLength = array.length;
  for (let i = arrayLength -1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

// 피셔 예이츠 알고리즘의 이해
// 5개의 요소 [0,1,2,3,4]를 가지는 배열 생성
// for문 i에 4,3,2,1,0 대입
// Math.random()은 0 이상 1 미만의 값이 반환되므로 randomIndex는 0 이상 i 이하
// 주요 포인트
// 요소 전체가 처리 대상이 된다.
// 한번 처리된 요소는 다시 작업 대상이 되지 않는다.