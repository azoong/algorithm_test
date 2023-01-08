//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120882

/*문제 설명
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ score[0], score[1] ≤ 100
1 ≤ score의 길이 ≤ 10
score의 원소 길이는 2입니다.
score는 중복된 원소를 갖지 않습니다.
입출력 예


score	                                    
[[80, 70], [90, 50], [40, 70], [50, 80]]	=>> [1, 2, 4, 3]
[[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]  =>>	[4, 4, 6, 2, 2, 1, 7]

*/

//풀이

// arr 배열에 score 점수를 가져와서 추가한후, arr2에 깊은복사를 해준다.
// arr2 배열을 정렬해준뒤 for of문으로 하나씩 가져와서 
// 그 점수에 인덱스 찾아서 answer에 차례대로 넣어준다.

function solution(score) {
    var answer = [];
    arr = []
    for (i=0; i<score.length; i++){
        arr.push(score[i][0]+score[i][1])
    }   
    arr2 = [...arr]
    for (a of arr){
        arr2.sort((a,b)=>b-a)
        answer.push(arr2.indexOf(a)+1)
    }
    
    return answer;
}

//다른 사람풀이중 좋았던것 
// map으로 인덱스 하나씩 가져온뒤
// 필터를 통해 그보다 점수 높은것들을 다시 필터링,해서 그 길이의 +1 로 등수를 센다

function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]]))