// 해쉬 변경 이벤트 감시
window.addEventListener('hashchange', handleHashChange);
handleHashChange();

function handleHashChange() {
  // 변경 후의 해시값
  const hash = location.hash;
  console.log(`현재 앵커는 ${hash}입니다.`);
}


// hashchange - URL의 해시가 변경되었을 때
// 페이지 내 앵커 링크를 클릭할 때
// 브라우저의 '뒤로 가기','앞으로 가기'버튼을 눌렀을 때
// 유저가 URL의 해시를 변경할 때