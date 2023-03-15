//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/12973

/*문제 설명


가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 
이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 
타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

타일을 가로로 배치 하는 경우
타일을 세로로 배치 하는 경우
예를들어서 n이 7인 직사각형은 다음과 같이 채울 수 있습니다.


링크 참조

직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.


제한사항
가로의 길이 n은 60,000이하의 자연수 입니다.
경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.
*/



//풀이

//n이 1일때 1, 2일때 2, 3일때 3, 4일때 5, 5일때 8이다

//숫자 증가하는게 파보나치 수열과 같다.


//재귀로 했지만 런타임 에러가 난다 
//콜스택이 초과되서 그런것 같다.
function solution(n, memo = {}) {
    if (n == 1 || n == 2) return n
    if (!memo[n]) {
        memo[n] = solution(n - 1, memo) % 1000000007 + solution(n - 2, memo) % 1000000007;
    }
    return memo[n]
}

//재귀가 아닌 반복문을 쓰니 통과되었다.
function solution(n) {
    if (n == 1 || n == 2) return n
    let result 
    let a = 1
    let b = 2
    for (let i = 3; i <= n; i++) {
        result = (a + b)  % 1000000007
        a = b
        b = result
    }
    return result
}





