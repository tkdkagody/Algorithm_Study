function solution(n, lost, reserve) {
	// n === 전체학생수
	// lost === 체육복을 도난당한 학생들의 번호가 담긴 배열
	// reserver === 여벌의 체육복을 가진 학생들의 번호가 담긴 배열
	// answer === 체육수업을 들을 수 있는 학생의 최대값
	let answer = n - lost.length;
	// .solution(7, [2, 3, 4], [1, 2, 3, 6]); 중복 제거
	// // 체육복을 잃어버렸으면서 여벌이 없는 경우
	lost = lost.filter((element) => !reserve.includes(element));

	// // 여벌이 있으면서 체육복을 잃어버리지 않은 경우
	reserve = reserve.filter((element) => !lost.includes(element));

	for (let i = 0; i < lost.length; i++) {
		if (reserve.includes(lost[i] - 1)) {
			answer++;
			reserve.splice(reserve.indexOf(lost[i] - 1), 1);
		} else if (reserve.includes(lost[i] + 1)) {
			answer++;
			reserve.splice(reserve.indexOf(lost[i] + 1), 1);
		}
	}

	return answer;
}

// 다시 풀었는데 실패했다 테스트코드 4개가 통과가 안된다 ㅋㅋㅋ

function solution(n, lost, reserve) {
	let answer = 0;
	const allArr = [];

	for (let i = 0; i < n; i++) {
		allArr.push(1);
	}

	for (let i of lost) {
		allArr[i - 1] -= 1;
	}

	for (let i of reserve) {
		allArr[i - 1] += 1;
	}

	for (let i = 0; i < n; i++) {
		if (allArr[i] === 0) {
			if (allArr[i + 1] === 2) {
				allArr[i + 1] -= 1;
				allArr[i] += 1;
				lost.unshift();
				reserve.unshift();
			} else if (allArr[i - 1] === 2) {
				allArr[i - 1] -= 1;
				allArr[i] += 1;
				reserve.unshift();
				lost.unshift();
			}
		}
	}

	for (let i = 0; i < allArr.length; i++) {
		if (allArr[i] !== 0) {
			answer++;
		}
	}

	return answer;
}
