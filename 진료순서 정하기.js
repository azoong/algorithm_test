//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120835

/*
문제 설명
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.


제한사항
중복된 원소는 없습니다.
1 ≤ emergency의 길이 ≤ 10
1 ≤ emergency의 원소 ≤ 100

입출력 예
emergency	                result
[3, 76, 24]	                [3, 1, 2]
[1, 2, 3, 4, 5, 6, 7]	    [7, 6, 5, 4, 3, 2, 1]
[30, 10, 23, 6, 100]	    [2, 4, 3, 5, 1]
*/

//문제풀이

//sort 를 사용할시 기존배열이 바뀌는것 때문에 고생한 문제
function solution(emergency) {
    
    //기존에 const sortarr = emergency.sort((a,b) => b-a) 을 할시 원배열인 emergency 배열 또한  정렬이 되어서
    //기존 배열과 순서과 바껴버리기에 [...emergency]를 활용한다.
    const sortarr = [...emergency].sort((a,b) => b-a) 

    //이후 내림차순 정렬한 배열을 활용하여 indexOf를 활용하여 배열의 인덱스를 찾아서 +1을 해준다.
    //ex) [76,24,3] 같은경우 76을 찾으면 0이 나오는데 +1을 했기에 1을 반환하게된다.
    answer = []
    for (i=0; i<emergency.length; i++){
        answer.push(sortarr.indexOf(emergency[i])+1)
        
    }
    return answer;
}