//문제 출처 //문제 출처https://school.programmers.co.kr/learn/courses/30/lessons/132267

/*문제 설명
 이 문제는 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 
 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다. 
 기존 콜라 문제와 마찬가지로, 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다. 
 상빈이는 열심히 고심했지만, 일반화된 콜라 문제의 답을 찾을 수 없었습니다. 
 상빈이를 도와, 일반화된 콜라 문제를 해결하는 프로그램을 만들어 주세요.

콜라를 받기 위해 마트에 주어야 하는 병 수 a, 
빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 
상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다. 
상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.

제한사항
1 ≤ b < a ≤ n ≤ 1,000,000
정답은 항상 int 범위를 넘지 않게 주어집니다.
입출력 예
a	b	n	result
2	1	20	19
3	1	20	9

*/

//문제 풀이
function solution(a, b, n) {
    var result = 0   //받은 콜라 합계
    var recycle = 0  //재활용 할수 있는 병 개수
    result += parseInt(n/a)*b  //처음에 재활용 한 병들을 합계에 더해준다.
    recycle += parseInt(n/a)*b + n%a // 재활용으로 받은 병과 남은 병을 더한값
    while(recycle >= a ){ // 최소 a보다 높아야 반복하도록 
        result += parseInt(recycle/a)*b // 다시 재활용해서 받는 병을 합계에 더함
        recycle = parseInt(recycle/a)*b + recycle%a // 받은병과 남은 병을 다시 더함.
    }
    return result;
}

