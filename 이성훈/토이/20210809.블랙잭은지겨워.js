// function boringBlackjack(cards) {
//   // TODO: 여기에 코드를 작성합니다.
// }

// // 조합 함수
// function combination(arr, selectNum) {
//   const result = [];
//   if (selectNum === 1) return arr.map((v) => [v]);
//   arr.forEach((v, idx, arr) => {
//     const fixed = v;
//     const restArr = arr.slice(idx + 1);
//     const combinationArr = combination(restArr, selectNum - 1);
//     const combineFix = combinationArr.map((v) => [fixed, ...v]);
//     result.push(...combineFix);
//   });
//   return result;
// }

// boringBlackjack([1, 2, 3, 4]);
// // boringBlackjack([2, 3, 4, 8, 13]);

// ! 기존코드
function boringBlackjack(cards) {
  // TODO: 여기에 코드를 작성합니다.
  const list = combination(cards, 3); // 중복 함수에 넣어서 찾아냄
  console.log(list);
  // list의 인자인 배열의 인자를 모두 합쳐서 매핑
  const allList = list.map((el) => el.reduce((a, c) => a + c));
  console.log(allList);
  let count = 0;
  for (let i of allList) {
    if (isPrime(i)) {
      count++;
    }
  }

  // 3장씩 조합해 소수가 되는 경우의 수
  return count;
}

// 소수 구하기
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// 조합 공식
function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

boringBlackjack([1, 2, 3, 4]);
