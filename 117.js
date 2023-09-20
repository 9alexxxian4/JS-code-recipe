// DOM 액세스 타이밍에 처리 실행
window.addEventListener('DOMContentLoaded', () => {
  // .box 요소 개수 가져오기
  const boxNum = document.querySelectorAll('.box').length;
  // 로그 출력
  console.log(`.box 요소의 개수는 ${boxNum}입니다.`);
});


// DOMContentLoaded - HTML 문저 로딩 완료 시점
// load - 모든 리소스 로딩 완료 시점