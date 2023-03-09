//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120808

/*문제 설명
첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 
두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때
분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 <denum1, num1, denum2, num2 < 1,000

입출력 예
denum1	num1	denum2	num2	result
1	    2	    3	    4	    [5, 4]
9	    2	    1	    3	    [29, 6]

*/


//풀이

function solution(denum1, num1, denum2, num2) {
    answer= []
    //분모끼리 곱해서 분모를 하나로 만들어주고 분자에다 각 분모를 곱해서 더해준다.
    // ex) 1/2 + 2/3 = 7/6 으로 만들어준다.
    var num = num1 * num2  
    var denum =  denum1 *num2 + denum2 * num1 
    for (i = num ; i > 0; i = i-1){           //반복문을 돌려서 최대공약수를 구한다.                          
        if(num%i === 0 && denum % i=== 0){    //이때 높은수부터 반복문을 돌리고 찾을시 바로 반복문을 중단시켜
            answer.push(denum/i)              //시간을 최소화 한다
            answer.push(num/i)
            break
        }
    }
    return answer;
}