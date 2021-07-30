function solution(numbers) {
  const answer = numbers
    .map((v) => v + "") // string화
    .sort((a, b) => (b + a) * 1 - (a + b) * 1) // 큰수의 조합 순으로 정렬
    .join(""); // 합쳐주기

  return answer[0] === "0" ? "0" : answer; // 방어 코드
}
const numbers = [6, 10, 2];
// const numbers = [3, 30, 34, 5, 9];
solution(numbers);

// 비교함수의 반환값이 음수면 순서를 그대로 유지하고
// 반환값이 양수이면 b를 a보다 우선하여 정렬한다.
// 반환값이 0인 경우 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다.
