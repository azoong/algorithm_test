//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120860

/*문제 설명
2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 
직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.



제한사항
dots의 길이 = 4
dots의 원소의 길이 = 2
-256 < dots[i]의 원소 < 256
잘못된 입력은 주어지지 않습니다.

입출력 예
dots	                                result
[[1, 1], [2, 1], [2, 2], [1, 2]]	    1
[[-1, -1], [1, 1], [1, -1], [-1, 1]]	4

*/

//풀이

function solution(dots) {
    a = []
    b = []
    for(let i of dots){
        a.push(i[0])
        b.push(i[1])
    }
    가로 = Math.max(...a)-Math.min(...a)
    세로 = Math.max(...b)-Math.min(...b)
    var answer = 가로 * 세로
    return answer;
}

//꼭지점중 가장 작은점과 큰점에 차가 변에 길이가 됩니다.
//직사각형의 넓이이기때문에 변2개가 필요하기에 x축과 y축의 길이를 구해서 곱해주면. 직사각형의 넓이가 구해짐