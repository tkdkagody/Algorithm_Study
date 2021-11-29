function solution(sizes) {
	const arr = sizes.map((el) => el.sort((a, b) => a - b));

	let row = 0;
	let column = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] > row) {
			row = arr[i][0];
		}

		if (arr[i][1] > column) {
			column = arr[i][1];
		}
	}

	return row * column;
}

// 그럼 각각 item을 sort시켜서 긴길이가 앞에 오게 하고
// 거기서 가장 큰 가로 길이 * 세로 길이 하면 될거라고 생각함
