function newChickenRecipe(stuffArr, choiceNum) {
    // 중복이 허용 되지 않는 순열
    // 0이 3개 이상이면 상한재료이기 때문에 제외 한다.
    // 재료를 넣는 순서가 다르면 다른 레시피이다.
    // 배열의 길이는 2이상 10이하다.
    // 요소의 길이는 20이하다.
    
    let freshArr = [];
  
  // 000 상한음식 제외시켜주기
    freshArr = stuffArr.filter((ele)=> {
      if(!String(ele).includes('000')){
        return ele
      }
    })
  
    // 엣지 케이스 처리
    if (freshArr.length === 0) {
        return [];
    }
    // 레시피 초기화
    let result = [];
  
    // freshArr를 상대로 순열 구하기
    const permutation = (arr, bucket, n) => {
  
      // n-1을 해줘서 최종적으로 result에 배열을 집어넣어서 리턴해준다.
      if (n === 0) {
        result.push(bucket);
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        // 하나를 초이스함
        const choice = arr[i];  
        // 배열을 슬라이스함
        const sliceArr = arr.slice()
        // 초이스만 뺀다
        sliceArr.splice(i, 1);
        // 재귀
                        
        permutation(sliceArr, bucket.concat(choice), n - 1);
      }
    };
  
    // 실행
    permutation(freshArr, [], choiceNum);
    
    // 순열의 길이 반환
    return result;
  }
  