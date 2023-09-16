const date = new Date();
const day = date.getDay();
const dayList = ['일','월','화','수','목','금','토'];
const label = `오늘은 ${dayList[day]}요일 입니다.`;

console.log(label);

// getDay() - 요일 가져오기 - 숫자 반환

// 0 - 일요일
// 1 - 월요일
// 2 - 화요일
// 3 - 수요일
// 4 - 목요일
// 5 - 금요일
// 6 - 토요일