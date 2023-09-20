const btn = document.querySelector('.button');

// 화살표 함수 사용하기
btn.addEventListener('click', () => {
  console.log('버튼 클릭 이벤트가 발생하였습니다.')
});


// 함수명 지정하기
btn.addEventListener('click', onClickButton);

function onClickButton() {
  console.log('버튼 클릭 이벤트가 발생하였습니다.');
}



button.addEventListener('click', (event) => {
  // 이벤트 정보 출력
  console.log(event);
});

button.addEventListener('click', (event) => {
  // 클릭한 버튼의 요소 출력
  console.log(event.target);
});


// 이벤트타깃.addEventListener(이벤트명, 리스너, [옵션🚨]) - 이벤트 리스너 설정