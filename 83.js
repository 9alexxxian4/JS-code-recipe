const date = new Date();
const month = date.getMonth() + 1; // 월
const day = date.getDate(); // 일
const label = `${month}월 ${day}일`; // 날짜 표시

console.log(label);

// getMonth() - 월 가져오기 - 숫자 반환
// getDate() - 일 가져오기 - 숫자 반환
// 0 - 1월
// 1 - 2월
// 2 - 3월
// 3 - 4월
// 4 - 5월
// 5 - 6월
// 6 - 7월
// 7 - 8월
// 8 - 9월
// 9 - 10월
// 10 - 11월
// 11 - 12월