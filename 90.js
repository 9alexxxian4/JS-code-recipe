// 날짜 단위로 확인은 '24 * 60 * 60 * 1000'으로 나눈다
const dateA = new Date('2020/06/01');
const dateB = new Date('2020/05/01');
const diffMSec = dateA.getTime() - dateB.getTime();
const diffDate = diffMSec / (24 * 60 * 60 * 1000);
console.log(`날짜의 차이는 ${diffDate}일 입니다.`) // '날짜의 차이는 31일입니다.'

// 시간 단위로 확인하고 싶은 경우 결과값을 '60 * 60 * 1000'으로 나눈다
const dateA2 = new Date('2020/06/01 10:00:00');
const dateB2 = new Date('2020/06/01 07:00:00');
const diffMSec2 = dateA2.getTime() - dateB2.getTime();
const diffHour = diffMSec2 / (60 * 60 * 1000);
console.log(`시간의 차이는 ${diffHour}시간입니다.`); // '시간의 차이는 3시간 입니다.'

// 분 단위로 확인은 '60 * 1000'으로 나눈다
const dateA3 = new Date('2020/06/01 01:10:00');
const dateB3 = new Date('2020/06/01 00:50:00');
const diffMSec3 = dateA3.getTime() - dateB3.getTime();
const diffMin = diffMSec3 / (60 * 1000);
console.log(`시간의 차이는 ${diffMin}분입니다.`); // '시간의 차이는 20분입니다.'