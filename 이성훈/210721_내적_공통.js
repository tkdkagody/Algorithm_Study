function solution(a, b) {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  console.log(result);
  return result;
}

// 1번째 테스트코드 정답 3
// solution([1, 2, 3, 4], [-3, -1, 0, 2]);

// 2번째 테스트코드 정답 -2
solution([-1, 0, 1], [1, 0, -1]);

// ! 수도코드
// 1. a의 n번째 b의 n번째를 곱하고
// 2. result 변수 선언해서 거기에 계속 더해줌

// ! 기존 코드
// function solution(a, b) {
//   let answer = 0;
//   for(let i=0; i<a.length; i++) {
//       answer += a[i]*b[i];
//   }
//   return answer;
// }
