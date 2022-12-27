//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120890

/*문제 설명

정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ array의 길이 ≤ 100
1 ≤ array의 원소 ≤ 100
1 ≤ n ≤ 100
가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

입출력  예
array	         n	    result
[3, 10, 28]	    20	    28
[10, 11, 12]	13	    12

*/


//풀이


function solution(array, n) {
    array.push(n) //배열에 n을 넣어준다
    array.sort((a,b)=>a-b)  //정렬을 하면 가까운수 2개가 n이 위치한 인덱스 앞과 뒤에 위치할것임
    var index = array.findIndex(a=> a===n)  //그 수2개 중 n과 차가 더 적은 것을 찾아서 리턴. 같을 경우 더작은수를 리턴
    if (array[index]-array[index-1] > array[index+1]-array[index]){
        return array[index+1]
    }else{
        return array[index-1]
    }
}