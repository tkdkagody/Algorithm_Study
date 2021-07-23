function solution(progresses, speeds) {
  const result = []; // 정답 배열
  const answer = []; // 몇일 걸렸는지

  // progresses의 길이만큼 반복
  for (let i = 0; i < progresses.length; i++) {
    let count = 0; // 총 몇일 걸리는지 세줄 변수
    let sum = progresses[i]; // progresses의 인자를 변수에 저장
    // sum이 100이 넘어가면 작업이 끝난것
    while (sum < 100) {
      // sum에 작업속도만큼 계속 더함
      sum += speeds[i];
      // 더할때마다 count도 증가
      count++;
    }
    // 작업이 끝난 인자를 push
    answer.push(count);
  }
  // console.log(answer); // [7, 3, 9]

  // 7일 걸린 맨앞에 인자를 먼저 내보내는데 그 뒤에 인자가 7일보다 작다면 같이 내보냄
  while (answer.length > 0) {
    const temp = []; // 인자의 개수를 담을 빈배열
    const front = answer.shift();
    // 즉 내보낼 인자보다 큰인자가 나올때까지 사이 인자들을 모두 내보냄
    for (let i = 1; i < answer.length; i++) {
      if (front >= answer[i]) {
        temp.push(answer[i]);
        // 그리고 그 인자들을 배열에서 삭제
        answer.splice(i, 1);
      }
    }
    // 이렇게 인자들을 내보낼 때 그 인자들의 개수를 result에 push
    result.push(temp.length);
  }
  console.log(result);
  return result;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

solution(progresses, speeds);

// https://programmers.co.kr/learn/courses/30/lessons/42586

// findIndex를 사용해서 큰 수가 나온 인덱스를 가져옴
