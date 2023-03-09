/*
문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/12921

문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.
입출력 예
n	result
10	4
5	3

*/

// 문제풀이


//1차로 재귀를 이용해 풀었지만. 효율성 테스트를 통과 못했다.
//재귀와 반복문을 사용하엿기에 효율성이 좋지 않다서인것 같다.

function solution(n) {
    if(n == 2) return 1
    let result = 1
    for (let i=2; i<n ; i++){
        if(n%i == 0) {
            result = 0
            break
        }
    }
    
    return result + solution(n-1);
}

//2번째 코드는 좀더 빨라졌지만 여전히 효율성 통과 X
function solution(n) {
    let result = 1
    let temp = [2]
    for (let i = 2; i*i<=n; i++){
        let stop = 0
        for (el of temp){
            if(i%el == 0) {
                stop = 1
                break
            }
        }
        if(stop == 0) {
            temp.push(i)
            result ++
        }
    }
    return temp.length
}

//통과한 코드
function solution(n) {
    let arr = new Array(n+1).fill(true) //true로 구성된 배열을 만든다.
    arr[0] = false //0과 1은 소수가 아니니 false를 고정으로 줌
    arr[1] = false
    for (let i =2; i<=n; i++){ 
        if(arr[i] === false){ //false이면 반복문을 안돌리고 스킵
            continue
        }else{
            for(let j = i*2; j <= n; j+=i){ //에라토스테네스의 체 라는 방식을 사용
                if(j%i==0) arr[j] = false     //소수가 자기 자신을 제외한 배수에는 false값을 줌
            }
        }
    }
    return arr.filter(a => a=== true).length;
}

console.log(solution(5))

//결국 검색을 통해 약간의 도움을 얻었다. 
//이번문제를 풀면서 효율적인 코드를 짜는것 (시간복잡도)를 좋게 하는게 정말 쉽지 않다고 느꼈다.
//그리고 효율적인 방식으로 짤수있냐 없냐에 따라 잘하는 개발자를 가르는 기준이라고 생각한다.


/* 에라토스테네스의 체
2부터 소수를 구하고자 하는 구간의 모든 수를 나열한다. 그림에서 회색 사각형으로 두른 수들이 여기에 해당한다.
2는 소수이므로 오른쪽에 2를 쓴다.
자기 자신을 제외한 2의 배수를 모두 지운다.
남아있는 수 가운데 3은 소수이므로 오른쪽에 3을 쓴다.
자기 자신을 제외한 3의 배수를 모두 지운다.
*/
