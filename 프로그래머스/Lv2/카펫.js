//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/42842

/*문제 설명

링크참조

*/

/* 풀이

예제케이스가 적어서 공식을 찾기 조금 어려웠다.

공식은 안에 있는 칸의 숫자의 약수의 특정 조합에 2씩 더한만큼 전체 약수의 조합이 된다.

에시) 바깥이 10칸 안이 2칸이면 2의 약수 [2,1]보다 2씩 큰 [4,3]이 12 약수가 됨으로 정답이된다.

예시2) 바깥 24, 안 24 일 경우 전체칸은 48개  
       안쪽 칸 24의 약수 [6,4]에 2씩더한 [8,6]의 경우 48의 약수이므로 정답



*/

function solution(brown, yellow) {
    var answer = []
    let sum = brown + yellow

    for (let i = 1; i<= yellow; i++){
        if(yellow % i ==0) {
            if((i+2) * (yellow/i +2) == sum) {
                answer.push(yellow/i +2, i+2)
                break
            }
        } 
    }
    
    return answer;
}

