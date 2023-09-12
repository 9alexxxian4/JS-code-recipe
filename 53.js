const array1 = ["곰", "사자"];
const array2 = ["여우", "개"];
const array3 = array1.concat(array2);
console.log(array3); // ['곰','사자','여우','개']

const array4 = ["곰", "사자"];
console.log([...array4]); // ['곰','사자']

const array5 = ["곰", "사자"];
const array6 = ["여우", "개"];
const array7 = [...array5, ...array6];
console.log(array7); //['곰','사자','여우','개']

// 배열1.concat(배열2, 배열3, ...) - 배열1에 배열2, 배열3을 결합
// [...배열1, ...배열2, ...배열3] - 배열1에 배열2, 배열3을 결합
