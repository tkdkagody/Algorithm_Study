// function movingStuff(stuff, limit) {
//   // TODO: 여기에 코드를 작성합니다.

// }

// ! 기존코드
function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.
  let count = 0; // 박스 개수의 최소값
  let result = 0; // result
  let check = false;

  // 무게 정렬
  stuff.sort((a, b) => a - b); // 정렬

  // 무게 배열길이가 0이상이면 반복
  while (stuff.length > 0) {
    // limit(무게제한)에서 배열의 마지막을 뺀 값
    result = limit - stuff[stuff.length - 1];
    // stuff에서 마지막 인자를 뺌
    stuff.pop();
    check = false;
    // 뒤에서 부터 반복
    for (let i = stuff.length; i > 0; i--) {
      // stuff[i-1]값보다 result가 작거나 같다면 AND check가 false라면
      if (stuff[i - 1] <= result && !check) {
        // i-1번째 값 삭제
        stuff.splice(i - 1, 1);
        // check true로 바꿈
        check = true;
      }
    }
    // count++
    count++;
  }
  console.log(count);
  return count;
}

movingStuff([60, 80, 120, 90, 130], 140);
