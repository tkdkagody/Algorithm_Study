function solution(n, arr1, arr2) {
  const result = [];
  for (let i = 0; i < n; i++) {
    //둘중 하나라도 1인 경우 1 => |
    const binary = (arr1[i] | arr2[i]).toString(2);
    const newArr = [];
    //이중for문은 0부터 시작하는 것이 아님 ,그래야 첫째자리 0인경우 else로 보냄 ?
    for (let f = binary.length - n; f < binary.length; f++) {
      if (binary[f] === "1") {
        newArr.push("#");
      } else {
        newArr.push(" ");
      }
    }
    result.push(newArr.join(""));
  }
  return result;
}
