function movingStuff(stuff, limit) {
  
    /*
    오름차순으로 정렬 stuff => sort사용
    가장 가벼운짐(0 인덱스) 가장무거운짐 (stuff.length-1)
    제일 가벼운짐과 제일 무거운 짐을 더했을때 limit 보다 작거나 같으면
    제일 가벼운 짐을 ++ 제일 무거운 짐을 --
    두개의 짐을 한꺼번에 옮겼을때 카운트 ++
    [50, 50, 70, 80] = 3
    */
    
    let sortstuff = stuff.sort((a,b)=> a - b)
  
    let light = 0
    let heavy = sortstuff.length - 1
    let together = 0
  
    while( light < heavy ){
      if(sortstuff[light]+sortstuff[heavy] <= limit){
        light++
        heavy--
        together++
      }else{
        heavy--
      }
    }
    return stuff.length - together
  }
  
  