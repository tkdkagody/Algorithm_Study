function solution(clothes) { 
    var answer = 1; 
    var obj = {}; 
        
        
    for(var i=0; i < clothes.length; i++){   
        if(!obj[clothes[i][1]]){
            obj[clothes[i][1]] = 1; // 1로 만들어 
            
        }
        else{  //동일한 키값이 있다면, 
            obj[clothes[i][1]] += 1;
        }
    } 
    
        //각각의 키에 해당하는 값+1 을 해서 다 곱해준다. 
    for (var key in obj){ 
        answer = answer *  (obj[key]+1); 
    } 
    //모두 안입는경우 1이 존재 
        return answer - 1; 

        //수정
    }
    