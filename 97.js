// 화면의 가로 길이
const w = window.innerWidth;

// 화면의 세로 길이
const h = window.innerHeight;

console.log(w,h);

window.addEventListener('resize', resizeHandler);

function resizeHandler() {
  // 새로운 화면의 가로 길이
  const w2 = innerWidth;
  // 새로운 화면의 세로 길이
  const h2 = innerHeight;
  
  console.log(`가로 길이는 ${w2}px 입니다.`);
  console.log(`세로 길이는 ${h2}px 입니다.`);
}

resizeHandler();


// window.innerWidth - 브라우저 뷰포트의 가로 길이 - 숫자 반환

// window.innerHeight - 브라우저 뷰포트의 세로 길이 - 숫자 반환