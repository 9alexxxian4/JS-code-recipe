document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('콘텐츠 표시 상태');
    return;
  }
  
  if (document.visibilityState === 'hidden') {
    console.log('콘텐츠 비활성화(백그라운드화) 상태');
  }
})


// visibilitychange - 브라우저의 탭 상태가 변경되는 시점