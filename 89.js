const date = new Date('2020/06/01');
date.setMonth(date.getMonth() - 1); // 1개월 전
console.log(date.toLocaleDateString()); // "2020. 5. 1."
date.setDate(date.getDate() + 60); // 60일 후
console.log(date.toLocaleDateString()); // "2020. 6. 30."