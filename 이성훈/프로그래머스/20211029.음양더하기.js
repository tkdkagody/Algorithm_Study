function solution(absolutes, signs) {
	let answer = 0;

	// absolutes와 signs의 length가 같으니 반복문으로 돌림
	for (let i = 0; i < absolutes.length; i++) {
		// signs가 true면 더하고 아니면 빼기
		if (signs[i]) {
			answer += absolutes[i];
		} else {
			answer -= absolutes[i];
		}
	}

	return answer;
}
