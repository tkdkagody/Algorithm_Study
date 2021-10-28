function solution(n) {
    // n의 숫자의 약수들의 합을 구하는 문제이다.
    // Math.sqrt로 제곱근을 이용한다 (연산을 줄이기 위해서)
    // 시간복잡도는 O(N) 
    
        let solution = 0
        
        for(let i =1; i <= Math.sqrt(n); i++){
            if(n % i === 0){
                solution += i;
                
                // 약수가 같은 값을 더하는걸 방지하기 위해서
                //4의 약수는 1 2 4 인데 
                //2 2 두개가 들어가는걸 방지하기위해
                if(i !== n/i){ 
                   
                  solution += n/i;
            }
        }
      }
          return solution
      }