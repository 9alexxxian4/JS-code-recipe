// 옵션 지정
const option = {
  once: true
};

document.querySelector('.button').addEventListener('click', onClickButton, option);

function onClickButton() {
  console.log('버튼 클릭 이벤트가 발생하였습니다.');
}


// capture - 이벤트 캡쳐 여부 - 진릿값 반환
// once - 리스너 1회 실행 여부 - 진릿값 반환
// passive - 패시브 이벤트 여부 - 진릿값 반환