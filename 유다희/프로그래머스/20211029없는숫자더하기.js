// function solution(numbers) {
//     let result = 0 ;
//     for(let i= 0 ; i<10 ; i++){
//         if(numbers.indexOf(i) === -1){
//             result = result + i;
//         }
//     }
//     return result ;
// }

function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum = sum + i;
  }

  let num = 0;
  for (let f = 0; f < numbers.length; f++) {
    num = num + numbers[f];
  }
  return sum - num;
}
