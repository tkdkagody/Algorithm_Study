function solution(price, money, count) {
	// price = 원래 이용료
	// n번째 이용할때마다  n배씩 받는다.
	// 놀이기구를 count번 타면 자신이 가지고 있는 금액에서 얼마가 모자라는지 리턴한다.
	// 시간복잡도는 O(N)

	let totalprice = 0;

	for (let i = 1; i <= count; i++) {
		totalprice += price * i;
	}
	return money > totalprice ? 0 : totalprice - money;
}
