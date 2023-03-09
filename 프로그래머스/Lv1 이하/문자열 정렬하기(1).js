/*
문제 출처https://school.programmers.co.kr/learn/courses/30/lessons/120850

문제 설명
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
my_string에는 숫자가 한 개 이상 포함되어 있습니다.
my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -

*/

//문제 풀이
function solution(my_string) {
    arr = my_string.replace(/[^0-9]/g, '') //정규표현식을 통해 문자열을 빈값으로 없앰
    arr = arr.split('')                    //스플릿을 통해 배열로 변환.
    arr.sort((a,b) => a - b)               //sort메소드로 오름차순으로 변환.
    answer = arr.map(a => Number(a))       //['1','2','3','4'] 와 같은 문자열 배열이기에 map으로 숫자배열로 변환 
    return answer
    
}


//다른사람 풀이 
	
function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}
// match + 정규식을 쓰면 배열로 특정값만 정렬됨.