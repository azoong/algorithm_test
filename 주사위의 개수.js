//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120845


/*문제 설명

문제 설명
머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다.
상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
box의 길이는 3입니다.
box[0] = 상자의 가로 길이
box[1] = 상자의 세로 길이
box[2] = 상자의 높이 길이
1 ≤ box의 원소 ≤ 100
1 ≤ n ≤ 50
n ≤ box의 원소
주사위는 상자와 평행하게 넣습니다.

입출력      예
box	            n	    result
[1, 1, 1]	    1	    1
[10, 8, 6]	    3	    12


*/

//풀이


function solution(box, n) {
    a = box.map(a=>Math.floor(a/n))
    const answer = a.reduce((a,b)=> a*b)
    return answer;
}

/*
box 안에 최대한 많은 n길이의 주사위를 넣어야한다.
상자 가로,세로,높이 각각에 넣을수 있는 주사위의 개수를 구한다. 
가로길이/n , 세로길이/n, 높이/n
구한 다음 각각 곱하면 최대 주사위 개수를 구할수있다.

map을 활용하여 각각 나누기를 해주고
그후 reduce를 활용하여 배열의 원소들을 곱하여준다.