// div 요소를 전부 불러오기
const allDivElementList = document.querySelectorAll('div');
// div 요소의 수를 출력
console.log(allDivElementList.length);
// 세 번째 div 요소 출력(인덱스가 부여된 요소)
console.log(allDivElementList[2]);




// document.querySelectorAll()의 반환값은 NodeListOf 객체이자 유사배열이기에 length와 인덱스를 가지기에 확인할 수 있지만 배열은 아니여서 filter()등의 메소드는 사용 불가능
//allDivElementList.filter((e) => e.classList.contains('on')); // 에러발생

// 스프레드 연산자(...)를 사용하여 유사 배열을 배열로 변환
const allDivElementList2 = document.querySelectorAll('div');
// 배열로 변환
const elementsArray = [...allDivElementList2];
// 배열용 메소드인 filter() 사용가능
elementsArray.filter((e) => e.classList.contains('on'));



const myString = '안녕하세요';
console.log(myString.length); // 5
console.log(myString[2]); // '하'
// 문자열도 [...문자열]을 사용해 배열로 변환가능
const myString2 = '안녕하세요';
console.log([...myString2]); // ['안','녕','하','세','요']



// 유사 배열은 Array.from()을 사용하여도 변환 가능
const myString3 = '안녕하세요';
console.log(Array.from(myString3)); // ['안','녕','하','세','요']

// 콜백 함수로 새로운 배열 생성 가능
// 문자열마다 '!'를 추가
const newArray = Array.from(myString3, (character) => `${character}!`);
console.log(newArray); // ['안!','녕!','하!','세!','요!']

// 스프레드 연산(...)도 map()을 사용할 수 있다. 브라우저 호환성에 문제가 없다면 스프레드 연산자를 사용해 더욱 간단하게 작업 가능
const myString4 = '안녕하세요';

// 콜백 함수로 새로운 배열 생성 가능
// 문자열마다 '!'를 추가
const newArray2 = [...myString4].map((charactor) => `${charactor}!`);
console.log(newArray2); // ['안!','녕!','하!','세!','요!']


// [...변환대상] - 배열 반환