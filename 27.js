let textarea = document.querySelector('.textarea');

let num = document.querySelector('.num');

textarea.addEventListener('keyup', onkeyup);

function onkeyup () {
  const inputText = textarea.value;
  num.innerText = inputText.length;
}

const smile = '😄'.length;
const love = '♥️'.length;

console.log(smile,love);

console.log(Array.from('😄'));
console.log(Array.from('😍'));


// 문자열.length - 문자열의 길이 - 숫자반환
// Array.from(문자열).length - 문자열의 길이 - 숫자반환

// 문자열은 유사배열이기 때문에 length를 구할수 있다
