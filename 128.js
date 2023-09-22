// 텍스트 영역
const textarea = document.querySelector('.textarea');

textarea.addEventListener('keyup', (event) => {
  // 입력 'a'에 대한 결과 출력
  console.log(event.key); // 'a'
  console.log(event.code); // 'KeyA'
  console.log(event.altKey); // false
  console.log(event.ctrlKey); // false
  console.log(event.shiftKey); // false
  console.log(event.metaKey); // false
  console.log(event.repeat); // false
  console.log(event.isComposing); // false
});

window.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  // 키 코드 값 확인
  const keyCode = event.keyCode;
  // 조건문으로 제어
  if (keyCode === 39) {
    // -> 키
    console.log('->키가 입력됨');
  }
  if (keyCode === 37) {
    // <- 키
    console.log('<-키가 입력됨');
  }
  if (keyCode === 38) {
    // ↑ 키
    console.log('↑키가 입력됨');
  }
  if (keyCode === 40) {
    // ↓ 키
    console.log('↓키가 입력됨');
  }
}


// 키보드이벤트.key - 눌러진 키의 값 - 문자열타입
// 키보드이벤트.code - 눌러진 버튼의 코드 - 문자열타입
// 키보드이벤트.altKey - 눌러진 키 값 확인(Alt키 여부) - 진릿값타입
// 키보드이벤트.ctrlKey - 눌러진 키 값 확인(Ctrl키 여부) - 진릿값타입
// 키보드이벤트.shiftKey - 눌러진 키 값 확인(Shift키 여부) - 진릿값타입
// 키보드이벤트.metaKey - 눌러진 키 값 확인(meta 키 여부) - 진릿값타입
// 키보드이벤트.repeat - 현재 키의 눌러진 상태 확인 - 진릿값타입
// 키보드이벤트.isComposing - 입력 중 상태 확인 - 진릿값타입
// 키보드이벤트.keyCode - 눌러진 키의 아스키 코드 값 - 숫자타입