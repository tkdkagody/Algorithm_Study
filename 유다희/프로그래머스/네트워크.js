//dfs - 재귀로 풀이 

function solution(n, computers) {
    var answer = 0;
    const visited= new Array(n).fill(false);

    for(let  i = 0;  i < n; i++ ){  //i 는 버텍스 순회 몇번인지 ! 3번 0,1,2가 돌게됨.
        if(!visited[i]){
            dfs(i);
            answer++;
        }
    }
    
      function dfs(vertex){
        visited[vertex] = true; //첫 버텍스(방문하지 않은)를 true; 
        
        for(let i = 0; i< n; i++ ){
            if(computers[vertex][i] === 1 && !visited[i]){
                dfs(i);
            }
        }
    }
        
    return answer;
}

