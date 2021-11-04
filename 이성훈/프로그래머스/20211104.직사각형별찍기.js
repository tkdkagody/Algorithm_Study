process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
	const n = data.split(" ");
	const a = Number(n[0]),
		b = Number(n[1]);

	let answer = "";
	for (let i = 0; i < a; i++) {
		answer += "*";
	}

	for (let i = 0; i < b; i++) {
		console.log(answer);
	}
});
// 주어진 a만큼 빈 문자열인 answer에다가 *를 추가
// 그렇게 만들어진 문자열인 answer을 b만큼 반복해서 출력
