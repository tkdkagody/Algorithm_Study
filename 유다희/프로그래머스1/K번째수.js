function solution(array, commands) {
    let answer= [];
   //commands의 요소배열들을 순환한다. 
    for(let f=0; f<commands.length; f++){
        let i = commands[f][0]
        let j= commands[f][1]
        let k = commands[f][2]
        
        let newArr = array.slice(i-1,j);
        let sorted = newArr.sort((a,b)=> a-b);
        
        answer.push(sorted[k-1]);
        
    }
    return answer;
}