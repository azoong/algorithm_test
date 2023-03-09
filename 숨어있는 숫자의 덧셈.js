//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120864

/*문제 설명
문자열 my_string이 매개변수로 주어집니다.
 my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. 
 my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
1 ≤ my_string 안의 자연수 ≤ 1000
연속된 수는 하나의 숫자로 간주합니다.
000123과 같이 0이 선행하는 경우는 없습니다.
문자열에 자연수가 없는 경우 0을 return 해주세요.
입출력 예

my_string	        result
"aAb1B2cC34oOp"	    37
"1a2b3c4d123Z"	    133

*/

// 풀이

function solution(my_string) {
    var answer = 0
    var arr = my_string.replace(/[^0-9]/g, ' ').split(' ').filter(a => a)
    for (let i of arr){
        answer += Number(i)
    }
    return answer;
}

/*
숫자를 빼는데 그냥 정규표현식을 쓸경우 

숫자를 한자리씩 빼기에 뭉쳐있는 숫자를 어떻게 뺄지가 중점

++
정규표현식으로 숫자를 찾지말고 숫자 외에 나머지를 찾아 공백으로 두면 

연속된 숫자를 배열로 분리 할수 있다!



*/