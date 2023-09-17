const oldTime = Date.now();

setInterval(() => {
  const currentTime = Date.now();
  // 경과한 밀리초 가져오기
  const diff = currentTime - oldTime;
  // 초 단위 변환하기
  const sec = Math.floor(diff / 1000);
  console.log(`${sec}초 경과`); // 1초마다 1초경과, 2초 경과 지속됨
}, 1000);




// Date.now() - 기준시에서 현재 시간을 밀리초로 가져오기 - 숫자 반환