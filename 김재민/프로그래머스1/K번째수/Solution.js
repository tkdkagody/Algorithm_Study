function solution(array, commands) {
	// [1, 5, 2, 6, 3, 7, 4]
	// i= 2 , j = 5, k = 3
	// i번째 숫자부터 j번째 숫자까지 자르고 정렬했을때 k번째 있는 수를 구한다.

	// [5,2,6,3]
	// 위의 배열을 sort를 통해서 정렬을 한다.
	// 정렬을 하고 k번째의 있는 숫자를 반환한다.
	//let sortArray = array.sort((a , b) => a - b)
	let result = [];
	for (let i = 0; i < commands.length; i++) {
		let SelectArray = array.slice(commands[i][0] - 1, commands[i][1]);

		SelectArray.sort((a, b) => a - b);

		result.push(SelectArray[commands[i][2] - 1]);
	}
	return result;
}