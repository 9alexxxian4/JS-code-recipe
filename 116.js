const box = document.querySelector('.box');
box.addEventListener('click', onClickButton);

// 3초 후 리스너의 함수를 삭제
setTimeout( () => {
  box.removeEventListener('click', onClickButton);
}, 3000);

function onClickButton() {
  console.log('box 클릭 이벤트가 실행되었습니다.');
}


// 이벤트타킷.removeEventListener(이벤트명, 리스너, [옵션🚨]) - 이벤트 리스너 삭제 