<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    .hide {
      display: none;
    }
  </style>
  <body>
    <header>
      <label
        >지역명의 첫 번째 글자를 입력해주세요.
        <input id="search-word-input" maxlength="1" type="text" />
      </label>
    </header>
    <div id="prefecture-list">
      <button data-name="속초" data-phonetic="sokcho">속초</button>
      <button data-name="부산" data-phonetic="busan">부산</button>
      <button data-name="포항" data-phonetic="pohang">포항</button>
      <button data-name="상주" data-phonetic="sangju">상주</button>
      <button data-name="서울" data-phonetic="seoul">서울</button>
      <button data-name="제주" data-phonetic="jeju">제주</button>
    </div>
  </body>
  <script>
    //검색어
    const searchWordText = document.querySelector("#search-word-input"); //인풋
    const prefectureList = document.querySelectorAll("#prefecture-list button"); //리스트의 버튼

    searchWordText.addEventListener("keyup", () => {
      const searchWord = searchWordText.value; //인풋에 입력 값

      //지역 버튼을 루프 처리 -> element 지역 버튼임
      prefectureList.forEach((element) => {
        if (!searchWord || searchWord === "") {
          element.classList.remove("hide");
          return;
        }
        //데이터 name 가져오기
        const prefectureName = element.dataset.name;
        //데이터 영문 name 가져오기
        const phonetic = element.dataset.phonetic;

        if (
          searchWord.charAt(0) === prefectureName.charAt(0) ||
          searchWord.charAt(0) === phonetic.charAt(0)
        ) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      });
    });
  </script>
</html>

// 문자열.charAt([인덱스]🚨) - 지정한 인덱스의 문자를 추출 - 문자 반환
