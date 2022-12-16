//문제 출처 //문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120887

/*문제 설명
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 
정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ i < j ≤ 100,000
0 ≤ k ≤ 9

입출력 예
i	j	k	result
1	13	1	6
10	50	5	5
3	10	2	0

*/

function solution(i, j, k) {
    var answer = 0;
    for (n = i ; n<=j; n++){
        answer += n.toString().split(k).length-1  
        // i부터 시작하여 j까지 1씩 늘어나는 반복문에서 k를 찾는다.
        // split 함수를 사용하여 문자열을 배열로 변환 후 배열의 크기에서 -1을 하면 특정 문자의 개수를 구할 수 있다.
    }    
    
    return answer;
}