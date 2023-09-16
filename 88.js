const date1 = new Date('2020/12/28 20:01:10');
const date2 = new Date('Mon Dec 28 2020 20:01:10');

console.log(date1); // "2020-12-28T11:01:10.000Z"
console.log(date2); // "2020-12-28T11:01:10.000Z"

const date3 = new Date(2020, 12, 28, 20, 1, 10);
console.log(date3); // "2021-01-28T11:01:10.000Z"

const date4 = new Date(1528801270000);
console.log(date4); // "2018-06-12T11:01:10.000Z"

const date = new Date();
date.setFullYear(2021);
date.setMonth(0);
date.setDate(1);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);

console.log(date.toLocaleString()); // "2021. 1. 1. 오전 12:00:00"

// setFullYear - 년 설정 - 반환 없음
// setMonth - 월 설정 - 반환 없음
// setDate - 일 설정 - 반환 없음
// setHours - 시 설정 - 반환 없음
// setMinutes - 분 설정 - 반환 없음
// setSeconds - 초 설정 - 반환 없음
// setMillisecond - 밀리초 설정 - 반환 없음