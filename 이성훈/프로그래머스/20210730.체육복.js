function solution(n, lost, reserve) {
  // n === 전체학생수
  // lost === 체육복을 도난당한 학생들의 번호가 담긴 배열
  // reserver === 여벌의 체육복을 가진 학생들의 번호가 담긴 배열
  // answer === 체육수업을 들을 수 있는 학생의 최대값
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      answer++;
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
    } else if (reserve.includes(lost[i] + 1)) {
      answer++;
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
    }
  }

  return answer;
}

// const n = 5;
// const lost = [2, 4];
// const reserve = [1, 3, 5];

const n = 5;
const lost = [2, 4];
const reserve = [3];

solution(n, lost, reserve);
// 앞뒤에 줄수있는 애가 있다면
// 옷을 주고 준애를 reserve에서 제외

// ! 기존코드
// function solution(n, lost, reserve) {
//     let answer = 0;
//     let arr = [];

//     // 초기세팅
//     for(let i=1; i<=n; i++) {
//         arr.push(1); // 우선 체육복을 한개씩 뿌림
//         if(reserve.includes(i)) { // reserve에 포함된 값 찾기
//             arr[i-1]++; // 체육복 한 벌 더주기
//         }
//         if(lost.includes(i)) { // 잃어버린 애 찾기
//             arr[i-1]--; // 체육복 한 벌 뺏기
//         }
//     }

//     // 체육복 빌려줄타이밍
//     for(let i=0; i<n; i++) {
//         if(arr[i] === 0) { // 만약 체육복이 없는 애라면
//             if(arr[i-1] === 2) { // 없는애 앞에가 여벌이 있다면
//                 arr[i]++; // 체육복 빌림 ㅎㅎ
//                 arr[i-1]--; // 체육복 빌려줌
//             }
//             if(arr[i+1] === 2) { // 뒤에 있는애가 여벌이 있다면?
//                 arr[i]++; // 체육볼 빌려버렸구여?
//                 arr[i+1]--; // 빌려줘버렸어요
//             }
//         }
//     }
//     for(let i=0; i<n; i++) {
//         if(arr[i] >= 1) { // 체육복 있는 놈들 다 찾을거니깐 1보다 큰놈 옥땅으로 따라와
//             answer++; // answer에 1씩 추가요~
//         }
//     }
//     return answer;
// }

// https://programmers.co.kr/learn/courses/30/lessons/42862
