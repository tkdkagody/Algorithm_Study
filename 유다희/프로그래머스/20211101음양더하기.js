//시간복잡도 : 반복문 1번

function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      absolutes[i] = -absolutes[i];
    } else {
      absolutes[i];
    }
  }
  return absolutes.reduce((acc, cur) => {
    return acc + cur;
  });
}
