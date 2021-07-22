function solution(a, b) {
    // var answer = 1234567890;
    // return answer;
    
    let result = [];
    for(let i=0; i<a.length; i++){
        result.push(a[i]*b[i]);
    }
    
    const answer = result.reduce((acc,cur)=> {
        return  acc+cur;
    },0)
    return answer;
    
}



// function solution(a,b){
//     let result = 0; 
//     for(let i=0; i<a.length; i++){
//         results = result + (a[i]*b[i]);
//     }
//     return result; 
// }