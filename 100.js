const isSupported = !!(
  'ontouchstart' in window || // iOS & 안드로이드
  (navigator.pointerEnabled && navigator.maxTouchPoints > 0)); // 
  
  console.log(isSupported);
  
  
  // window.ontouchstart - 터치 기능 시작 이벤트 - 함수 반환
  // navigator.pinterEnabled - 포인터 사용 가능 여부 - 진릿값 반환
  // navigator.maxTouchPoints - 포인터의 최대치 - 숫자 반환