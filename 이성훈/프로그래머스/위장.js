function solution(clothes) {
  let answer = 0;
  for (let i = 0; i < clothes.length; i++) {
    for (let j = i + 1; j < clothes.length; j++) {
      if (clothes[i][1] !== clothes[j][1]) {
        answer++;
      }
    }
  }
  return answer + clothes.length;
}

// https://programmers.co.kr/learn/courses/30/lessons/42578

// (의상의 수 + 1) * (의상의 수 +1) - 1 = 경우의 수
