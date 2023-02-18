//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/42583

/*문제 설명

링크참조

*/
function solution(bridge_length, weight, truck_weights) {
    //배열의 합을 구하는 식
    const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0); 
    var answer = 0;
    // 다리 길이 만큼 null 값으로 채워진 배열을 만듬 [null,null]
    let bridge = Array.from(new Array(bridge_length), k => k = null) 
    let truck = truck_weights
    while (true) {
    //트럭의 남은 배열이 없으면 트럭이 다 다리에 들어온거기 때문에 빠져나가는 시간
    //다리 길이만큼 더해주고 루프를 중단.    
        if (!truck.length) {
            answer += bridge_length
            break
        }
        // 빠져나가는 트럭의 무게를 제외한 나머지 트럭의 무게들과 새로 들어오는 차의 무게를 
        // 계산하여 초과하면 배열에 빈값을 추가하고, 초과하지 않으면 트럭을 추가
        else if (sum(bridge.slice(1)) + truck[0] > weight) {
            bridge.shift()
            bridge.push(null)
        } else {
            bridge.shift()
            bridge.push(truck.shift())
        }
        answer++

    }
    return answer;
}

//노드와 연결리스트를 사용하지 않았기에 시간이 간단간당한 것도 있었지만 중간에 빠져나가는 시간을 줄여서 그런지 통과


// console.log(solution(2, 10, [7, 4, 5, 6]))

console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]))