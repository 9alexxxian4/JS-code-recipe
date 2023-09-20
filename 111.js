const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  // 전체 화면 전환
  myRequestFullScreen(document.body);
})

function myRequestFullScreen(element) {
  if (event.requestFullscreen) {
    // 표준 사양
    element.requestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    // 사파리, 크롬
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    // 파이어폭스
    element.mozRequestFullScreen();
  } else if (element.msRequestFullScreen) {
    // 인터넷 익스프로러 11+
    element.msRequestFullscreen();
  }
}

const btnExit = document.querySelector('#btnExit');
btnExit.addEventListener('click', (event) => {
  // 전체 화면 해제
  myCancleFullScreen();
})

function myCancleFullScreen() {
  if (document.exitFullscreen) {
    // 표준 사양
    document.exitFullscreen();
  } else if (event.webkitRequestFullscreen) {
    // 사파리, 크롬
    document.webkitRequestFullscreen();
  } else if (event.mozRequestFullScreen) {
    // 파이어폭스
    document.mozRequestFullScreen();
  } else if (event.msRequestFullscreen) {
    // 인터넷 익스프로러 11+
    document.msRequestFullscreen();
  }
}


// element.requestFullscreen() - 전체 화면으로 표시 - Promise 반환
// document.requestFullScreen() - 전체 화면 해제 - Promise 반환