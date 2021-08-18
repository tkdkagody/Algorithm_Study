// function divideChocolateStick(M, N) {
//   // TODO: 여기에 코드를 작성합니다.
// }

// ! 기존코드

function divideChocolateStick(M, N) {
  // TODO: 여기에 코드를 작성합니다.
  let gcdNum = gcd(M, N);
  const result = [];
  for (let i = 1; i <= gcdNum / 2; i++) {
    if (gcdNum % i === 0) {
      result.push([i, M / i, N / i]);
    }
  }
  result.push([gcdNum, M / gcdNum, N / gcdNum]);
  console.log(result);
  return result;
}

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

// 답은 나오는데 시간복잡도에서 실패

let M = 4;
let N = 8;
let output = divideChocolateStick(M, N);
console.log(output);

// // ! 레퍼런스

// function gcd(m, n) {
//   if (m % n === 0) return n;
//   return gcd(n, m % n);
// }

// function divideChocolateStick(M, N) {
//   const result = [];
//   // 최대공약수를 구한다.
//   // M, N의 순서는 상관없다.
//   const GCD = gcd(M, N);
//   let temp = 0; //

//   // 약수는 대칭적이므로 제곱근까지만 반복해도 된다.
//   // 예) 36의 약수는 1, 2, 3, 4, 6, 9, 12, 18, 36이다.
//   // 제곱근을 기준으로 양쪽의 값 하나씩 곱했을 때 36이 되기 때문에
//   // 제곱근 보다 큰 약수는 제곱근보다 작은 약수에서 구할 수 있다.
//   const sqrt = Math.floor(Math.sqrt(GCD));
//   for (let left = 1; left <= sqrt; left++) {
//     if (GCD % left === 0) {
//       // 최대공약수의 약수인 경우 중 제곱근 보다 작은 약수의 경우
//       result.push([left, M / left, N / left]);
//       if (left * left < GCD) {
//         // 제곱근이 아닌 경우(제곱근 보다 작은)
//         right = GCD / left; // 최대 공약수를 제곱근이 아닌 수로 나누면 제곱근 보다 큰 약수를 구할 수 있다.
//         result.push([right, M / right, N / right]);
//       }
//     }
//   }

//   // '빼빼로를 받게 되는 직원의 수'를 기준으로 오름차순으로 정렬
//   result.sort((op1, op2) => op1[0] - op2[0]);

//   return result;
// }

// ! 블로그

function divideChocolateStick(M, N) {
  // 최대 공약수를 구하는 유클리드 호제법
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const GCD = gcd(M, N);

  let result = [];
  // 시간 복잡도를 고려하여 최대 공약수의 약수를 구합니다.
  for (let i = 1; i <= Math.floor(Math.sqrt(GCD)); i++) {
    if (GCD % i === 0) {
      result.push([i, M / i, N / i]);
      // 최대 공약수의 제곱근 값이 iteratee보다 큰 경우
      // GCD에 iteratee를 나눈 값이 최대 공약수의 약수가 됩니다.
      if (i * i < GCD) {
        let j = GCD / i;
        result.push([j, M / j, N / j]);
      }
    }
  }
  // 최대 공약수의 약수를 오름차순으로 정렬합니다.
  result.sort((a, b) => a[0] - b[0]);
  return result;
}

console.log(divideChocolateStick(10, 6));
