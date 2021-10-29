function solution(arr) {
	//arr에 들어는 배열의 가장 작은 숫자를 빼서
	// 리턴해주면 된다.
	// splice로 배열을 제거해주는데
	// Math.min으로 배열의 최소값을 구해주고 제거해준다.
	// 만약에 배열의 길이가 1보다 작으면 [-1]을 리턴해준다.
	// 시간복잡도는 O(N)2

	arr.splice(arr.indexOf(Math.min(...arr)), 1);

	if (arr.length < 1) {
		return [-1];
	}
	return arr;
}
