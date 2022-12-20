//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120825

/*
문제 설명

문자열 my_string과 정수 n이 매개변수로 주어질 때,
my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 
하도록 solution 함수를 완성해보세요.


제한사항
2 ≤ my_string 길이 ≤ 5
2 ≤ n ≤ 10
"my_string"은 영어 대소문자로 이루어져 있습니다.


입출력 예
my_string	n	 result
"hello"	    3	"hhheeellllllooo"

*/

//풀이 

function solution(my_string, n) {
    // 문자를 배열로바꾼후 맵함수에서 반복하는 만큼 더해주는 repeat함수를 사용
    var answer = [...my_string].map(a => a.repeat(n)).join("")
    return answer;
}