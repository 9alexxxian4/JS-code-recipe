window.addEventListener('focus', () => {
  document.querySelector('#log').innerHTML = "포커스 상태";
})

window.addEventListener('blur', () => {
  document.querySelector('#log').innerHTML = "포커스를 벗어난 상태";
})


// focus - 포커스가 맞춰져 있을 때
// blur - 포커스를 벗어나 있을 때