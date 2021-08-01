function solution(n, lost, reserve) {
    let answer = 0;
    let arr = [];


    for(let i=1; i<=n; i++) {
        arr.push(1); 
        if(reserve.includes(i)) { 
            arr[i-1]++; 
        }
        if(lost.includes(i)) { 
            arr[i-1]--; 
        }
    }

    for(let i=0; i<n; i++) {
        if(arr[i] === 0) { 
            if(arr[i-1] === 2) { 
                arr[i]++; 
                arr[i-1]--; 
            }
            if(arr[i+1] === 2) {
                arr[i]++; 
                arr[i+1]--; 
            }
        }
    }
    for(let i=0; i<n; i++) {
        if(arr[i] >= 1) { 
            answer++; 
        }
    }
    return answer;
}