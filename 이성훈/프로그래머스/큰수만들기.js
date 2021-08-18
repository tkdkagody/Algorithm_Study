// ! 내 코드
function solution(number, k) {
  const stack = [];

  number.split("").forEach((el) => {
    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }

    stack.push(el);
  });

  stack.splice(stack.length - k, k);

  return stack.join("");
}

// // ! 풀이코드
// function solution(number, k) {
//   const stack = []; // stack을 담아놓을 배열
//   let answer = ""; // 정답

//   // number 배열을 반복
//   for (let i = 0; i < number.length; i++) {
//     const el = number[i]; // number의 인자를 변수에 저장

//     // k가 0보다 크거나 stack의 마지막 인자가 el보다 작다면 계속 반복
//     while (k > 0 && stack[stack.length - 1] < el) {
//       stack.pop(); // stack의 마지막 인자를 제거
//       k--; // k--씩 빼서 while을 멈출수 있게 함
//     }

//     stack.push(el); // stack 맨 뒤에 el을 푸쉬
//   }

//   stack.splice(stack.length - k, k); // stack길이 - k 번째부터 k개를 삭제
//   answer = stack.join(""); // 배열을 문자열로 합침

//   return answer;
// }

// ! 입출력 예시
console.log(solution("1924", 2)); // 94
console.log(solution("1231234", 3)); // 3234
console.log(solution("4177252841", 4)); // 775841
