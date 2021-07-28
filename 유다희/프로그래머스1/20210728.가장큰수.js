function solution(numbers) {

    let makeString = numbers.map((el)=> {
        return String(el);
    });
    
    let makeSort = makeString.sort((a,b)=> {
        return (b+a) - (a+b); 

        //??
    })
    
    
    
    //numbers의 모든 요소가 0인경우  무조건 0을 리턴 
    if(makeSort.every((el)=> {
        return el === "0"
    })){ return '0' ; }
    else{
        return makeSort.join("");
    }
    
    
}




//array.every 메소드 :  배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. 
//Boolean 값을 반환



//[예시]
// const aa= (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(aa));
// 여기서 반환값은 =>> true
