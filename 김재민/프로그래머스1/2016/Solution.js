function solution(a, b) {
	let answer = "";
	let NewB = b;
	const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
	const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	days.forEach((day, i) => {
		if (i < a - 1) NewB += day;
	});
	answer = week[NewB % 7];
	return answer;
}

// 시간복잡도는
// NewB는 인수로 전달받은 b를 복사해서 전월의 일수들을 더한 값이다.
// days는 1월부터 12월까지의 일수를 배열로 만들었다. days 배열을 순회하면서 전월까지의 일수를 더해 NewB에 할당한다.
// 그 이후에 NewB를 7로 나눈 나머지에 따라 요일을 결정한다.
// 시간복잡도는 O(N)