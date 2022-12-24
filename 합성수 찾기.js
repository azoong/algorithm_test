//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120846

/*문제 설명

약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 
자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.


입출력 예
n	    result
10	    5
15	    8

*/

//풀이
function solution(n) {
    let result = 0
    for (i = 4; i <= n; i++) {
        var divisor = 0
        for (j = 1; j * j <= i; j++) {
            if (j * j === i) {
                divisor += 1
            } else if (i % j === 0) {
                divisor += 2
            }
        }
        if (divisor > 2) {
            result +=1
        }
    }
    return result
}

//약수를 구한다음 약수에 개수가 3개 이상이면 result에 추가해준다.