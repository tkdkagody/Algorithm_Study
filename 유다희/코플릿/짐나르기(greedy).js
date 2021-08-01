function movingStuff(stuff, limit) {
    // TODO: 여기에 코드를 작성합니다.
  
    //stuff를 오름차순 정렬한다 
    //박스에 넣는 최적의 방법은 가장 무거운 짐과 가장 가벼운 짐을 선택하는것 . 

    //반복문을 돌려준다. 
    //반복문의 조건은 배열이 유효할때, 즉 sidx가 bidx보다 작은경우에만 반복문이 돈다 
    //카운트 변수를 만들어서, 조건을 충족한다면 카운트를 올려준다. 
    //박스의 개수를 리턴한다 => 짐전체개수 - 짝지어진수(count)를 빼준다. 
    let count = 0 ; 
    let sortedSutff = stuff.sort((a,b)=> a-b ); 
    let sIdx = 0;
    let bIdx = stuff.length-1 ; 
  
    while( sIdx < bIdx){
      if( sortedSutff[sIdx] + sortedSutff[bIdx]  > limit){
        bIdx--; 
      }
      else{
        count ++;
        sIdx ++; 
        bIdx--; 
      }
    }
  
    return sortedSutff.length - count ; 
  
  
  }