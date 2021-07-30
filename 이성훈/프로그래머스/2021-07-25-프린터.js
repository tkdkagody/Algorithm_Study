function solution(priorities, location) {
  let answer = 0;
  const max = Math.max(...priorities);
  const thisIsMe = priorities[location];
  priorities[location] = "THISISME";

  while (priorities[0] === "THISISME" ? thisIsMe : priorities[0] < max) {
    priorities.push(priorities.shift());
  }
  answer = priorities.indexOf("THISISME") + 1;
  console.log(priorities);
  return answer;
}

// 맨 처음 priorities[location] 값이 정렬된 후에 몇번째 인덱스에 있는지 리턴

// max값을 찾아서 배열의 0번재 값이 max값보다 작다면 빼서 맨 뒤에 넣어버림
// 뺄때 max 값과 같은지 확인

const priorities = [2, 1, 3, 2];
const location = 2;
// result = 1;

// const priorities = [1, 1, 9, 1, 1, 1];
// const location = 0;
// result = 5;
solution(priorities, location);

// https://programmers.co.kr/learn/courses/30/lessons/42587
