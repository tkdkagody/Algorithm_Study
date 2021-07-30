function solution(answers) {
  const result = []; // 결과값 넣어줄 배열
  // 찍은 숫자들
  const answer = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // el는 인자, i는 인덱스 answers의 인자와 answer에 인자가 같은 것들로만 이루어진 정답 개수 배열을 만들고
  // 그 길이를 변수에 저장
  const one = answers.filter((el, i) => el === answer[0][i % 5]).length;
  const two = answers.filter((el, i) => el === answer[1][i % 8]).length;
  const three = answers.filter((el, i) => el === answer[2][i % 10]).length;

  // 정답길이가 가장 긴 값 변수에 저장
  const max = Math.max(one, two, three);

  // max값과 같다면 제일 큰 값이므로 result에 넣어줌
  // 오름차순으로 넣어줘야하기 때문에 one부터 먼저 계산
  if (one === max) {
    result.push(1);
  }
  if (two === max) {
    result.push(2);
  }
  if (three === max) {
    result.push(3);
  }

  // 정답 리턴
  return result;
}

// ! 기존코드
// function solution(answers) {
//     let answer = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
//     let count = [0,0,0]; // 수포자들의 정답 개수

//     for(let i=0; i<answers.length; i++) {
//         if(answer[0][i%5] == answers[i]) {
//             count[0]++;
//         }
//         if(answer[1][i%8] == answers[i]) {
//             count[1]++;
//         }
//         if(answer[2][i%10] == answers[i]) {
//             count[2]++;
//         }
//         console.log(i, i%5, i%8, i%10);
//     }
//     let max = 0;
//     let result = [];
//     for(let j=0; j<count.length; j++) {
//         if(count[j]>max) {
//             max = count[j];
//         }
//     }
//     for(let k=0; k<count.length; k++) {
//         if(max == count[k]) {
//             result.push(k+1);
//         }
//     }

//     return result.sort();
// }

// https://programmers.co.kr/learn/courses/30/lessons/42840
