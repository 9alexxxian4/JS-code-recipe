const box = document.querySelector('.box');
box.addEventListener('touchstart', (event) => {
  // 터치 정보 리스트
  console.log(event.changedTouches);
});

// 터치 영역
const targetBox = document.querySelector('.box');
// 로그
const log = document.querySelector('.log');

// 화면의 터치 위치 변경 시 로그 표시
targetBox.addEventListener('touchmove', () => {
  const touch = event.changedTouches;
  
  log.innerHTML = `
  ${touch[0].pageX.toFixed(2)}<br>
  ${touch[0].pageY.toFixed(2)}
  `;
});


// event.changedTouches - 터치 정보 배열 - 배열타입

// 터치정보.clientX - 브라우저 좌측 상단 기준 X 좌표 - 숫자타입
// 터치정보.clientY - 브라우저 좌측 상단 기준 Y 좌표 - 숫자타입
// 터치정보.offsetX - 요소 좌측 상단 기준 X 좌표 - 숫자타입
// 터치정보.offsetY - 요소 좌측 상단 기준 Y 좌표 - 숫자타입
// 터치정보.pageX - 페이지 좌측 상단 기준 X 좌표 - 숫자타입
// 터치정보.pageY - 페이지 좌측 상단 기준 Y 좌표 - 숫자타입
// 터치정보.screenX - 디바이스 좌측 상단 기준 X 좌표 - 숫자타입
// 터치정보.screenY - 디바이스 좌측 상단 기준 Y 좌표 - 숫자타입