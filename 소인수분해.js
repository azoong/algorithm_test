//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120852

/*
문제 설명
소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 
예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다.
따라서 12의 소인수는 2와 3입니다.
자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록
solution 함수를 완성해주세요.

제한사항
2 ≤ n ≤ 10,000


입출력   예
n	    result
12	    [2, 3]
17	    [17]
420	    [2, 3, 5, 7]

*/
function isPrime(num) {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (!(num % i)) {
                return true;
            }
        }
        return false;
    }
}


function solution(n) {
    var result = []
    var a = n
    while(isPrime(a)){
       
        for (i=2; i<a; a++){
            console.log(a)
            console.log(i)
            if (a % i === 0) {
                result.push(i)
                a = a / i
                break
            }
        }
       
    }
    return result
}

console.log(solution(100))



