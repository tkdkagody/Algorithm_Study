function solution(progresses, speeds) {
    let answer = [0];
    
        // needDay = 개발에 필요한 날짜의 배열
        let needDay = progresses.map((progress, i) =>
            Math.ceil((100 - progress) / speeds[i]),
        );
        
        // 개발에 필요한 최대 날짜를 needDay[0]으로 초기화
        let maxDay = needDay[0];
    
        for (let i = 0, j = 0; i < needDay.length; i++) {
            // 개발에 필요한 날짜가 최대 날짜보다 낮으면
            // 이미 개발 된 것이기 때문에
            if (needDay[i] <= maxDay) {
                // 정답배열에 1을 더해준다.
                answer[j] += 1;
            } else {
                // 최대날짜를 필요한 날짜로 초기화 하고
                maxDay = needDay[i];
                // 정답 배열 다음 칸에 1을 넣어준다.
                answer[++j] = 1;
            }
        }
        return answer;
    }

    