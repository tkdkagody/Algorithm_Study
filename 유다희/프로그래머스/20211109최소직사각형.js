function solution(sizes) {
    let result = 0;
    
    let width  = sizes.map(el=> el[0]);  //width배열
    let height = sizes.map(el=> el[1]);  //height배열
    
    for(let i=0; i<sizes.length; i++){
        if(width[i] < height[i]){
            let temp = width[i];
            width[i] = height[i];
            height[i] = temp;
        }
    }
    
    let maxW = Math.max(...width);
    let maxH = Math.max(...height);
    result = maxW * maxH ; 
    return result; 
}

