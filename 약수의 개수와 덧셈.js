//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/87389

/*문제 설명
두 정수 left와 right가 매개변수로 주어집니다. 
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000

입출력 예
left	right	result
13	17	43
24	27	52

*/

//풀이
function solution(left, right) {
    var answer = 0;
    for (i = left; i<=right; i++){
        let divisor = 0
        for (j = 1; j * j <= i; j++) { //약수 구하는 반복문 divisor에 추가하며 약수개수를 센다
            if (j * j == i) {  //9에서 약수 3일 경우 약수가 하나만 추가되기에 +1을 해준다.
                divisor += 1
            } else if (i % j === 0) {
                divisor += 2
            }
        }
        divisor%2 === 0 ? answer += i : answer -= i //짝수이면 더하고 홀수이면 빼준다.
    }
    
    return answer;
}
