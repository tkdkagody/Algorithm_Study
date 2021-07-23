function solution(clothes) {
    // clothes = [의상이름, 의상의 종류]로 이루어져있다.
    // 빈객체를 만들어주고 반복문을 돌면서 의상종류 : 의상이름의 형태로 만들어준다.
        
    // (의상의 수 + 1) * (의상의 수 + 1) - 1 = 경우의 수
        
    // reduce로 초기값을 {}로 만들어서 배열의 1번째가 키가되는 객체가 같을때마다
    // 1씩증가하게된다.
        
    const dailylook = clothes.reduce((acc, cur) => {
            acc[cur[1]] ? acc[cur[1]] += 1 : acc[cur[1]] = 1
            return acc
        }, {})
    
    
        let result = 1
        for (let key in dailylook) {
            result = result * (dailylook[key] + 1) 
        }
        return result - 1
    }