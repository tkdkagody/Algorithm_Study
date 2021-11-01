function solution(numbers) {
	let answer = 0;
	const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	for (let el of num) {
		if (!numbers.includes(el)) {
			answer += el;
		}
	}

	return answer;
}

// 1. 0부터 9까지 숫자로 이루어진 배열을 생성
// 2. 그 배열에 요소만큼 반복
// 3. 요소가 주어진 numbers안에 포함되있지 않다면 그 요소를 answer에 추가
// 4. 리턴
