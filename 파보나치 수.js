/*
문제 설명
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

제한 사항
n은 2 이상 100,000 이하인 자연수입니다.
입출력 예
n	return
3	2
5	5
입출력 예 설명
피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.
*/

function solution(n) {
    var answer = 0;
    let f1 = 0, f2 = 1;
    // 포문을 2부터 시작함으로 
    // F(2) = F(0) + F(1) = 0 + 1 = 1 를 대입해준다.
    for(let i = 2; i<= n; i++){
        answer = (f1 + f2) % 1234567; 
        f1 = f2
        f2 = answer
        //나머지를 답으로 준후, 후속으로 f1과 f2를 바꾸어 줌으로서 다음 파보나치 수를 계산할수 잇게 함.
    }
    return answer
    
}

console.log(solution(3))
console.log(solution(5))