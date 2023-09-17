const totalTime = 10000; // 10초
const oldTime = Date.now();

const timerId = setInterval(() => {
  const currentTime = Date.now();
  // 시간의 차를 구함
  const diff = currentTime - oldTime;
  // 남은 밀리초 계산
  const remainMsec = totalTime - diff;
  // 밀리초를 정수의 초 단위로 변환
  const remainSec = Math.ceil(remainMsec / 1000);
  
  let label = `남은 시간 ${remainSec}초`;
  
  // 0초 이하의 처리 작업
  if (remainMsec <= 0) {
    // 타이머를 종료
    clearInterval(timerId);
    
    // 타이머 종료를 표시
    label = '종료';
  }
  
  console.log(label);
}, 1000);



// setInteval(함수, 밀리초) - 밀리초 후 함수 실행