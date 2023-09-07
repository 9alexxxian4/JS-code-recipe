const string = 'JavaScript를 배우자';

const a1 = string.indexOf('JavaScript');
console.log(a1);

const a2 = string.indexOf('배우자');
console.log(a2);

const a3 = string.indexOf('Script');
console.log(a3);

const a4 = string.lastIndexOf('a');
console.log(a4);

const b1 = string.indexOf('HTML');
console.log(b1);

const b2 = string.indexOf('s');
console.log(b2);

const c1 = string.indexOf('JavaScript', 4);
console.log(c1);

const s1 = string.search(/JavaScript/);
console.log(s1);

const s2 = string.search(/HTML/);
console.log(s2);

const s3 = string.search(/Script/);
console.log(s3);