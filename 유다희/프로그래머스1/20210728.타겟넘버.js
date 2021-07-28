function solution(numbers, target) {
    let answer = 0;
    
        
         //처음 상태 지정해줌. 
      dfs(0, 0);
    
    
        
        
      function dfs(depth, sum) {
          
        //종료조건 = depth가 numbers의 갯수와 같은경우  다 돌았음 
        if (depth === numbers.length) {
            //타겟과 같아지면 +해주고 아닌경우 아무것도 안함 
          if (sum === target) {
            answer++ ;
          }
          return;
        }
          // 
        dfs(depth + 1, sum + numbers[depth]); // 왼쪽
        dfs(depth + 1, sum - numbers[depth]); // 오른쪽
          
      }
    
       
      return answer;
    }
    
    
    
    
    //dfs 로 풀어야함.