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