const string1 = '    안녕하세요    ';
const trim1 = string1.trim();
console.log(trim1);

const string2 = '사과를 먹었어요\n';
const trim2 = string2.trim();
console.log(trim2);

const string3 = '    사과.  귤.   ';
const trim3 = string3.trim();
console.log(trim3);


// 문자열.trim() - 문자열 양 끝의 공백을 제거 - 문자열반환
// 공백은 스페이스, 탭, 줄바꿈 문자를 의미하며, 양단이 아닌 문자열 사이의 공백은 제거되지 않는다.
