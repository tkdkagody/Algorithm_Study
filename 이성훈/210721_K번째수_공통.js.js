function solution(array, commands) {
  const answer = [];

  // commands의 요소를 하나씩 사용할 수 있게 반복
  for (let i = 0; i < commands.length; i++) {
    // 원본 배열 복사
    const newArray = [...array];
    // i번째 요소
    let item = commands[i];

    // slice로 item[0]부터 item[1]까지 잘라냄 그리고 정렬
    let temp = newArray.slice(item[0] - 1, item[1]);
    temp.sort((a, b) => a - b);

    // item[2]번째의 있는 수를 answer에 push
    answer.push(temp[item[2] - 1]);
  }

  return answer;
}

// 1. commands의 한 요소씩
// 2. 불변성을 위해 복사한 array에
// 3. slice를 사용해서 commands[0]부터 commands[1]까지 잘라냄
// 4. 그리고 commands[2]번째의 있는 수를
// 5. answer에 push
// 1부터 5번을 반복문으로 반복

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

solution(array, commands);
// result = [5, 6, 3]

// ! 이전에 풀었던 코드
// function solution(array, commands) {
//   let answer = [];
//   for(let z=0; z<commands.length; z++) {
//       let num =  commands[z];
//       let i = num[0];
//       let j = num[1];
//       let k = num[2];

//       let arr = array.slice(i-1, j).sort((a,b) => a-b);
//       answer.push(arr[k-1]);
//   }

//   return answer;
// }
