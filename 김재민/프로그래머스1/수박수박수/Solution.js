function solution(n) {
	// 인풋으로 n = number값이 들어온다.
	// 아웃풋으로는 "수박"이 연속적으로 나오는 문자열이 나온다.
	// 홀수일때는 수를 더하게
	// 시간복잡도는 O(N) 이 된다.

	let result = "";
	for (let i = 1; i <= n; i++) {
		if (i % 2 === 0) {
			result += "박";
		} else {
			result += "수";
		}
	}
	return result;
}