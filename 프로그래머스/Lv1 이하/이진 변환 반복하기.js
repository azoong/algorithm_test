//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/70129

/*문제 설명

0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.


제한사항
s의 길이는 1 이상 150,000 이하입니다.
s에는 '1'이 최소 하나 이상 포함되어 있습니다.

입출력 예
s	            result
"110010101001"	[3,8]
"01110"	        [3,3]
"1111111"	    [4,1]

*/

//변환값을 가지고 계속 반복하는 작업이기에 재귀를 사용해서 풀었다.
//인자의 s와 배열인 result를 주고 s의 길이가 1이되면 그동안 반복된 result를 반환하도록 하였다.

function solution(s, result = [0, 0]) {
    //기저조건 길이가 1이면 스탑.
    if(s.length == 1 ) return result
    else {
        result[0] += 1 
        result[1] += s.length-s.replaceAll('0', '').length 
        //바뀐 s값과 업데이트된 result 를 다시 호출한다.
        return solution(s.replaceAll('0', '').length.toString(2), result)
    }
    
}


console.log(solution('110010101001'))
console.log(solution('01110'))