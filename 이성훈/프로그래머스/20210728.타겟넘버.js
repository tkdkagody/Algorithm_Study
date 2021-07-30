function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]); // 다음 인덱스의 숫자가 +인 자식 노드를 계속 탐색 끝에가면 스택 삭제
    dfs(index + 1, sum - numbers[index]); // 마지막 인덱스에 도착했을때 함수 실행
  }

  return answer;
}

// 숫자를 다 쓰긴해야될듯
const numbers = [1, 1, 1, 1, 1];
const target = 3;
solution(numbers, target);

// 참조 https://jjnooys.medium.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84-javascript-1d7983d423b5
