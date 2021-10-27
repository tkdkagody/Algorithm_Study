function solution(nums) {
	let answer = 0;

	// 소수인지 아닌지 판별해주는 함수
	function isPrime(number) {
		if (number < 2) return true;
		for (let i = 2; i < number; i++) {
			if (number % i == 0) return false;
		}
		return true;
	}

	const length = nums.length;
	for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {
			for (let k = j + 1; k < length; k++) {
				const sum = nums[i] + nums[j] + nums[k];
				if (isPrime(sum)) answer++;
			}
		}
	}

	return answer;
}

// 서로다른 숫자 중 3개를 골라 소수가 되는 경우의 개수를 구하는 문제

// 1. 반복문 3번돌려 서로다른 숫자 3개를 고를 수 있게 함
// 2. 숫자 3개를 모두 합쳤을때 소수라면
// 3. answer++
