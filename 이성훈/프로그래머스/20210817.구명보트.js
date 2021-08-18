// ! 풀이
// function solution(people, limit) {
//   let answer = 0;

//   for (let i = 0; i < people.length; i++) {
//     let el = people[i]; // 인자

//     let less = limit - el; // limit에서 el을 뺀 나머지 값
//     console.log(el, people.includes(less));
//     // 나머지값이 people안에 포함되어 있고 나머지 값의 인덱스가 현재 요소의 인덱스와 같다면
//     if (people.includes(less) && people[people.indexOf(less)] !== el) {
//       console.log(el);
//       // 자기자신 제외 했는지 여부
//       people.splice(i, 1); // 해당 요소 제거
//     } else {
//       // 포함되어 있지 않다면
//       console.log(el);
//       answer++;
//       people.splice(i, 1); // 해당 요소 제거
//     }
//   }

//   return answer;
// }

// ! 블로그
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a); // 내림차순 정렬
  let l = 0; // 첫번째 수
  let r = people.length - 1; // 마지막 수

  // 첫번째 수가 마지막 수보다 작다면 계속 반복
  while (l < r) {
    let sum = people[l] + people[r]; // 합계
    if (sum > limit) {
      // 합계가 한계보다 크다면
      l++; // 첫번째 수 증가
    } else {
      l++; // 첫번째 수 증가는 동일
      r--; // 마지막 수 감소
    }
    answer++; // answer 증가
  }
  if (l === r) answer++; // 첫번째 수와 마지막 수가 같다면 answer증가
  return answer;
}

// ! 입출력 예시
console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3

// 수도코드
// 배열에 요소를 limit에서 뺀 값이 배열내에 없다면 그 요소를 제거하면서 answer++
// 왜 자꾸 80이 빠지는건지는 모르겠음

// 못풀었음....
