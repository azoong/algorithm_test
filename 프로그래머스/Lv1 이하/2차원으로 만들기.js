//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120842

/*문제 설명

문제 설명
정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

num_list	n	result
[1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]]

제한사항
num_list의 길이는 n의 배 수개입니다.
0 ≤ num_list의 길이 ≤ 150
2 ≤ n < num_list의 길이

입출력 예
num_list	n	result
[1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]]
[100, 95, 2, 4, 5, 6, 18, 33, 948]	3	[[100, 95, 2], [4, 5, 6], [18, 33, 948]]

*/

//문제풀이

function solution(num_list, n) {
    var answer = []
    while(num_list.length > 0){  
        answer.push(num_list.splice(0,n))                         
    }
    return answer;
}

/*
slice를 쓰면 원본배열은 그대로 이지만
splice를 쓰면 num_list 원본도 변한다.
앞에서 n개씩 짤라 answer 푸쉬해주는것을 반복해준다.  

*/