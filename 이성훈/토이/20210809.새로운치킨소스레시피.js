function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.
  // stuffArr =  재료, choiceNum은 개수

  // 000 거르기
  stuffArr = stuffArr.filter((el) => {
    if (!String(el).includes("000")) {
      return el;
    }
  });

  // choiceNum보다 작을때
  if (stuffArr.length < choiceNum) {
    return [];
  }

  // 경우의 수 구할 함수에 전달
  return permutation(stuffArr, choiceNum);
}

// 경우의 수 구할 함수
function permutation(arr, selectNum) {
  let result = [];
  // 개수가 한개라면 인자하나씩 배열로 감싸줌
  if (selectNum === 1) return arr.map((el) => [el]);

  // arr 전체 순환
  arr.forEach((v, idx, arr) => {
    // 인자
    const fixer = v;
    // arr의 index와 idx와 같은 않은것들만 restArr 배열에 담음
    const restArr = arr.filter((_, index) => index !== idx);
    // permutation함수에 arr를 restArr로 selectNum을 -1해서 재귀
    const permuationArr = permutation(restArr, selectNum - 1);
    // 인자를 담아놓은 fixer과 배열 v를 스프레드로 풀어서 하나의 배열로 만들고 매핑
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    // result에 담아주면 끝
    result.push(...combineFixer);
  });
  return result;
}

newChickenRecipe([1, 10, 1100, 1111], 2);
// newChickenRecipe([10000, 10, 1], 3);
// 비밀의 승승장구 치킨 소스가 될 수 있는 경우의 수를 반환
