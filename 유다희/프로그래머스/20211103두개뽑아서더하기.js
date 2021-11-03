function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (result.indexOf(sum) < 0) {
        result.push(sum);
      }
    }
  }
  return result.sort((a, b) => a - b);
}
