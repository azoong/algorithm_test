//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/138477#qna

/*문제 설명
"명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들의 문자 투표수로 가수에게 점수를 부여합니다.
매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다.
즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다.
k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면,
출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.

이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다. 
예를 들어, k = 3이고, 7일 동안 진행된 가수의 점수가 [10, 100, 20, 150, 1, 100, 200]이라면, 
명예의 전당에서 발표된 점수는 아래의 그림과 같이 [10, 10, 10, 20, 20, 100, 100]입니다.

명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 
매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.


제한사항
3 ≤ k ≤ 100
7 ≤ score의 길이 ≤ 1,000
0 ≤ score[i] ≤ 2,000


입출력 예
k	score	result
3	[10, 100, 20, 150, 1, 100, 200]	[10, 10, 10, 20, 20, 100, 100]
4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]

*/


//풀이

function solution(k, score) {
    var answer = [];
    var arr = []
    for (i=0; i <k; i++){
        arr.push(score[i])
        answer.push(Math.min.apply(null, arr))
    }
    for (i=k; i <score.length; i++){
        arr.sort((a, b) => a - b)
        if(score[i] > arr[0]){
            arr.shift(0)
            arr.push(score[i])
        }
        answer.push(Math.min.apply(null, arr))
       
    }
    return answer;
}

// 처음 이렇게 풀었지만 테스트 케이스에서 통과못하는 케이스가 있엇는데 문제점을 찾지 못하였다.

console.log(solution(9,[10, 30, 40, 3, 0, 20, 4]))

// [  10, 10,  10,   3, 0, 0,  0, NaN, NaN]

// 위와 같이 주차인 k가 score보다 점수 보다 많은 경우 null값을 출력해서 통과가 안되는것이였다.

// 풀이 수정

function solution(k, score) {
    var arr = []
    var answer = []
    for (i=0; i<score.length; i++){
        arr.push(score[i])
        if(arr.length > k){
            arr.sort((a,b)=> a-b)
            arr.shift()
        }
        answer.push(Math.min.apply(null, arr))
        
    }
    return answer;
}

console.log("ㅋㅋㅋ", solution(9,[10, 30, 40, 3, 0, 20, 4]))

// [10, 10, 10, 3, 0, 0, 0]

//반복문도 하나로 줄이고 코드도 수정하였다.
//반복문을 socre길이까지만 실행하고 배열의 길이가 k보다 클경우 오름차순 정렬으로 가장 앞에수를 제거해주고
//그후 가장 작은 수를 answer에 푸쉬해준다.


