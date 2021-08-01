function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
  
    //보드 현재위치 잡아줄 x,y 
     let x = 0; 
     let y= 0; 
     //점수 가져오기 
     let score = board[x][y]; 
  
  //operation을 순차적으로 값을 가져와야함 .
  for(let i =0; i<operation.length; i++){
  
    if(operation[i] === "U"){
      x--;
      if(x > board.length-1 ){
        return "OUT"
        break;
      }
      score = score + board[x][y];
    }
    if(operation[i] === "D"){
      x++;
      if(x > board.length-1){
        return "OUT"
        break;
      }
      score = score + board[x][y];
     
    }
    if(operation[i] === "L"){
      y--;
      if( y > board[0].length-1){
        return "OUT"
        break;
      }
      score = score + board[x][y];
    
    }
    if(operation[i] === "R"){
      y++;
      if(y > board[0].length-1){
        return "OUT"
        break;
      }
      score = score + board[x][y];
    
    } 
  
  }
  
  return score;  
  
  };
  
  