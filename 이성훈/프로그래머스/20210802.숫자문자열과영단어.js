// function solution(s) {
//     var answer = 0;
//     s = s.replace(/one/g,'1');
//     s = s.replace(/two/g,'2');
//     s = s.replace(/three/g,'3');
//     s = s.replace(/four/g,'4');
//     s = s.replace(/five/g,'5');
//     s = s.replace(/six/g,'6');
//     s = s.replace(/seven/g,'7');
//     s = s.replace(/eight/g,'8');
//     s = s.replace(/nine/g,'9');
//     s = s.replace(/zero/g,'0');
//     console.log(s);
//     s = Number(s);
//     return s;
// }

function solution(s) {
  let answer = "";
  const number = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "zero",
  ];
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    if (Number(s[i])) {
      answer += s[i];
    } else {
      temp += s[i];
      if (number.includes(temp)) {
        switch (temp) {
          case "one":
            answer += 1;
            break;
          case "two":
            answer += 2;
            break;
          case "three":
            answer += 3;
            break;
          case "four":
            answer += 4;
            break;
          case "five":
            answer += 5;
            break;
          case "six":
            answer += 6;
            break;
          case "seven":
            answer += 7;
            break;
          case "eight":
            answer += 8;
            break;
          case "nine":
            answer += 9;
            break;
          case "zero":
            answer += 0;
            break;
        }
        temp = "";
      }
    }
  }

  return Number(answer);
}
// s를 한 단어씩 비교해서 그 단어가 숫자면 answer에 추가
// 단어면 임시 변수에 저장해서 단어가 나올때까지 비교

const s = "one4seveneight"; // result 1478
// const s = "23four5six7"; // 234567
// const s = "2three45sixseven"; // 234567
// const s = "123"; // 123
solution(s);
