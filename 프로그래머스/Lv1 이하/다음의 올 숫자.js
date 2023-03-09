//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120924

/*문제 설명

등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

제한사항
2 < common의 길이 < 1,000
-1,000 < common의 원소 < 2,000
common의 원소는 모두 정수입니다.
등차수열 혹은 등비수열이 아닌 경우는 없습니다.
등비수열인 경우 공비는 0이 아닌 정수입니다.
입출력 예
common	result
[1, 2, 3, 4]	5
[2, 4, 8]	16

*/

//풀이

// 3번째 숫자와 2번째 숫차의 차와 1번째 2번째 차가 같다면 등차
// 아니라면 등비수열이라고 생각하고 식을 작성
function solution(common) {
    let result
    if(common[2]-common[1] === common[1]-common[0]){
        result = common.slice(-1)*1 + common[1]-common[0]
    }else{
        result = common.slice(-1) * common[1]/common[0]
    }
    return result;
}
