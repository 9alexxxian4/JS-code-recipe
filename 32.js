// slice 사용하기
const a1 = '나의 노트북'.slice(3, -1);
const a2 = '나의 노트북'.slice(-6, -4);

// substring 사용하기
const b1 = '나의 노트북'.substring(3, -3);
// const b1 = '나의 노트북'.substring(3, 0);
// const b1 = '나의 노트북'.substring(0, 3);
const b2 = '나의 노트북'.substring(-4, -1);
// const b2 = '나의 노트북'.substring(0, 0);

console.log(a1);
console.log(a2);
console.log(b1);
console.log(b2);

const c1 = '반갑습니다'.slice(3, 1);
console.log(c1);

const c2 = '반갑습니다'.substring(3, 1);
console.log(c2);