//1. 약수를 구하는 효율적인 방법 !
//N의 약수를 구할때는 1~N의 제곱근 까지의 수만 0으로 나누어 떨어지는지 확인한다.

//2. 또한 숫자가 제곱수라면 약수는 짝수
// 제곱수가 아니라면 홀수 !

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      //제곱수가 아니라면 짝수
      result -= i;
    } else {
      // 제곱수라면 약수는 홀수
      result += i;
    }
  }
  return result;
}
