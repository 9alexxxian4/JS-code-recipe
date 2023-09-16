const date = new Date();
const hour = date.getHours(); // 시간
const minutes = date.getMinutes(); // 분
const seconds = date.getSeconds(); // 초

const label = `${hour}시 ${minutes}분 ${seconds}초`;

console.log(label); // 현재시간

// 오전 오후 판별
const date2 = new Date();
const hour2 = date2.getHours(); // 시간
let merdiem;
let hour3;
if (hour2 < 12) {
  merdiem = '오전';
  hour3 = hour2;
} else {
  merdiem = '오후';
  hour2 = hour - 12;
}
const label2 = `${merdiem}${hour2}시`;

console.log(label2); // 현재 시간

// getHours() - 시간 가져오기 - 숫자 반환
// getMinutes() - 분 가져오기 - 숫자 반환
// getSeconds() - 초 가져오기 - 숫자 반환
// getMilliseconds() - 밀리초 가져오기 - 숫자 반환