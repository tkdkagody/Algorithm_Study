// 스택/큐


function solution(progresses, speeds) {
    
    //답
    let result = [];
    
    //나갈 수 있는 기간. = term배열
    let term = [];
    for(let i =0; i< progresses.length; i++){
       term.push( Math.ceil((100 - progresses[i])/speeds[i]));  //[7,3,9]
    }
    
    //term이 비워질때까지 반복 
    while(term.length >0){
        let idx = term.findIndex((el)=> {
            return term[0] < el ; //el이 커졌을때의 인덱스를 반환해줌. => 갯수니깐 -1 안해도 됨.
        })
        if(idx === -1)  {
            result.push(term.length) 
            term.splice(0,term.length);
        }
        else{
            result.push(idx); //idx가 잘린 개수가 됨. 
            term.splice(0,idx)
        }
    }
    
    
    return result ; 
    
}