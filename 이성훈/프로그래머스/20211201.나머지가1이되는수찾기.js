function solution(n) {
	let answer = n;

	for (let i = 0; i < n; i++) {
		if (n % i === 1) {
			if (answer > i) {
				answer = i;
			}
		}
	}

	return answer;
}
