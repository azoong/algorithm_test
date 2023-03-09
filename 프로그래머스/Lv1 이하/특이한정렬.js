//문제 출처https://school.programmers.co.kr/learn/courses/30/lessons/120880

/*문제 설명
정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 10,000
1 ≤ numlist의 원소 ≤ 10,000
1 ≤ numlist의 길이 ≤ 100
numlist는 중복된 원소를 갖지 않습니다.



*/

//풀이

// n을뺀 값에 차를 절대값으로 두고, 비교하여 정렬한다. 
// 단 절대값이 같을 경우에 큰수가 우선인경우를 예외로 설정해준다.
function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const arr = Math.abs(n - a) - Math.abs(n - b);
        if (Math.abs(n - a) === Math.abs(n - b)) {
            return b - a
        }
        return arr
        
    })
}



console.log(solution([1, 2, 3, 4, 5, 6],4))