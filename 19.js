for (let i = 0; i < 10; i++) {
  if(i % 2 === 0) {
    continue;
  }
  console.log(i);
}

console.log('루프가 종료됌');

function myFunction(flgA) {
  for (let i = 0; i < 10; i++) {
    if(flgA === true) {
      if(i % 2 !==0) {
        console.log(i);
      }
    }
  }
}

const result = myFunction(true);


function myFunction2(flgA) {
  for (let i = 0; i < 10; i++) {
    if(flgA === false) {
      continue;
    }
    if(i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
}

const result2 = myFunction2(true);