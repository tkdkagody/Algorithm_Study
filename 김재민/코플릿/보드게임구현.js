function boardGame(board, operation) {
    /* 
      U = 상
      D = 하
      L = 좌
      R = 우
    보드 밖을 나간말은 OUT처리가 된다.
    배열안의 숫자를 획득할 수 있다.

[
  [0, 0, 0, 1],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0]
              ]
    */

    let count = 0;
    let x =0
    let y =0

    for(let i =0; i < operation.length; i++){
      // undefined로 하면 out이 리턴이 안된다.
    if (y < 0 || x < 0) {
      return "OUT";
    } 
      if(operation[i] === 'U'){
          board[y--][x] === 1 ? count++ : count
      }
      if(operation[i] === 'D'){
            board[y++][x] === 1 ? count++ : count
      }
      if(operation[i] === 'L'){
           board[y][x--] === 1 ? count++ : count
      }
      if(operation[i] === 'R'){
           board[y][x++] === 1 ? count++ : count
      }
    }
    
    return count > 0 ? count+1 : count
}

/*
arrayLength
Array 생성자에 제공한 유일한 매개변수가 0에서 232-1 이하의 정수인 경우,
 length 속성이 해당 값인 새로운 JavaScript 배열을 생성합니다. 
 (참고: 이렇게 생성한 배열은 arrayLength 만큼의 빈 슬롯을 가지는 것으로, 
 실제 undefined를 채우는 것이 아닙니다.) 
 값이 범위 밖이거나 정수가 아닌 경우 RangeError가 발생합니다
 */