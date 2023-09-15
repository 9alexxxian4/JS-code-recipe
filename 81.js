function searchUser(targetId) {
  const userList = [
    { id: 1, name: '사자'},
    { id: 2, name: '곰'},
    { id: 3, name: '여우'}
  ];
  // 해당 유저 검색
  const targetUser = userList.find((user) => user.id === targetId);
  return targetUser.name;
}

searchUser(1); // 사자
// searchUser(4); // undefined

function searchUser2(targetId2) {
  const userList2 = [
    { id: 1, name: '사자'},
    { id: 2, name: '곰'},
    { id: 3, name: '여우'}
  ];
  // 해당 유저 검색
  const targetUser2 = userList2.find((user) => user.id === targetId2);
  // 데이터가 undefined인 경우 null 반환
  if (targetId2 === undefined) {
    return null;
  } 
  
  return targetUser2.name;
}

console.log(searchUser2(1)); // 사자
console.log(searchUser2(4)) // null




// Null - 데이터가 존재하지 않음 - null