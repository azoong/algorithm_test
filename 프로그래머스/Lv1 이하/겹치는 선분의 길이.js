//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120956

/*문제 설명
선분 3개가 평행하게 놓여 있습니다.
세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 
2차원 배열 lines가 매개변수로 주어질 때, 
두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.




제한사항
lines의 길이 = 3
lines의 원소의 길이 = 2
모든 선분은 길이가 1 이상입니다.
lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
-100 ≤ a < b ≤ 100

*/



//풀이

//포문을 통해 각 선분 시작 점부터 끝점 전까지 arr에 추가해준다.
//그후 중복된 배열을 reduce로 찾아주고,
//Object.values로 키값을 가져와 중복된 값을 가지는 점을 찾아주고 그것의 길이를 리턴해준다. 

function solution(lines) {
    var arr = []
    for (i=0; i<3; i++){
        for(j = lines[i][0]; j<lines[i][1]; j++){
            arr.push(j)
        }
    }
    result = arr.reduce((acc,val) => {acc[val]= (acc[val]||0)+1; return acc},{})
    
    return Object.values(result).filter(a=> a>1).length
}