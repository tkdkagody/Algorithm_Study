function solution(participant, completion) {
	const par = participant.sort();
	const com = completion.sort();

	for (let i = 0; i < par.length; i++) {
		if (par[i] !== com[i]) {
			return par[i];
		}
	}
}
// participant와 completion를 동일하게 정렬하면 같은 인덱스인데 다른 문자가 나올때가 바로 완주하지 못한 선수의 값을 가진 인덱스가 된다
