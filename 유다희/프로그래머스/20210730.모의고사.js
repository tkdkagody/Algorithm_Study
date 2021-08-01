function solution(answers) {
    var answer = [];
    
    
    let gu= [[ 1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]

    
    let score = [0,0,0];
    
    for(let i=0; i<answers.length ; i++){
        if(answers[i] === gu[0][i %  gu[0].length]){
            score[0] ++;
        }
        if(answers[i] === gu[1][i %  gu[1].length]){
            score[1] ++;
        }
        if(answers[i] === gu[2][i %  gu[2].length]){
            score[2] ++;
        }                                             
    }
    
    
    //score배열 최대값 찾기 ! 
    let max = Math.max(...score);
    
    
    for(let i= 0; i<score.length ; i++){
        if(score[i] === max){
           if(i === 0) answer.push(1);
           else if(i===1) answer.push(2);
            else answer.push(3)
        }
    }
    
    
    
    
    //오름차순정렬하기 
    answer.sort( (a,b)=> {
        return a-b; 
    })
    return answer;
    
}