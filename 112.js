// 접속 상태 확인
const isOnline = navigator.onLine;
if (isOnline === true) {
  console.log('온라인 상태입니다.');
} else {
  console.log('오프라인 상태입니다.');
}


// 온라인 상태가 되면 실행되는 이벤트
window.addEventListener('online', () => {
  console.log('온라인 상태입니다.');
});

// 오프라인 상태가 되면 실행되는 이벤트
window.addEventListener('offline', () => {
  console.log('오프라인 상태입니다.');
});



// navigator.onLine - 네트워크 상태 가져오기 - 진릿값 반환
// 크롭 개발자 도구의 [Network] 탭에서 [Offline] 체크박스로 온라인/오프라인 상태를 변경할 수 있다.