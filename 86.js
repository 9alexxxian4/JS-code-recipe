const date = new Date();

const locale = date.toLocaleString(); // 2023.9.16. 오전 11:44:29
const localeDate = date.toLocaleDateString(); // 2023.09.16
const localeTime = date.toLocaleTimeString(); // 오전 11:44:29

console.log(`${locale} ${localeDate} ${localeTime}`); // "2023. 9. 16. 오전 11:44:29 2023. 9. 16. 오전 11:44:29"


// toLocaleDateString() - 현재 날짜를 문자열로 가져오기 - 문자열 반환
// toLocaleTimeString() - 현재 시각을 문자열로 가져오기 - 문자열 반환