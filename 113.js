const btn = document.querySelector('.button');
btn.addEventListener('click', onClickButton);

function onClickButton() {
  console.log('클릭 이벤트가 발생하였습니다.');
}


// 유저의 조작에 따라 이벤트를 실행하고 싶을 때