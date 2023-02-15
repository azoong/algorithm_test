//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/12924

/*문제 설명

Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15
자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

제한사항
n은 10,000 이하의 자연수 입니다.

입출력 예
n	result
15	4

*/

//풀이 

// 큐를 활용하는 방법이 떠올랐다.
// 배열에 [1,2,3,4,5] 이 n과 같아질때 까지 더해주며 
// 배열의 합이 n보다 작으면 같아질때 까지 더하고
// 배열의 합이 n보다 크면 배열 앞에서부터 삭제  
// 같아지면 결과값에 더해주자.

//1차 풀이
function solution1(n) {
    const sum = (arr) =>  arr.reduce((acc, cur) => acc + cur, 0);
    // 가독성을 위해 배열의 합을 구하는 함수를 따로 작성
    let answer = 1;
    let que = []
    let i = 1
    while(i < n){
        if(sum(que) == n) { //배열합이 n과 같으면 결과값에 더해줌
            answer ++
            que.push(i)
            i ++
        }
        else if(sum(que) < n) { // 배열합이 n보다 작으면 배열에 하나씩 추가
            que.push(i)
            i ++
        }
        else if(sum(que) > n){ // 배열합이 n보다 크면 작은값부터 하나씩
            que.shift(i)
        }
    }
    
    return answer;
}
// console.log(solution(15))
// 테스트 케이스16번에서 하나 걸림,
// 효율성 2번에서 통과 되었다 안되었다 함.(수정해야할듯.)


//2차 풀이
function solution2(n) {
    const sum = (arr) =>  arr.reduce((acc, cur) => acc + cur, 0);
    let answer = 1;
    let que = []
    let i = 0
    if(n ==1 ) return 1
    while(i <= Math.ceil(n/2)){ //어차피 기본적으로 자기자신인 1개는 고정값이고
                                //다음으로 n값의 절반 이상으로 가면 2개의 연속된 수는 정답이 될수 없기에 절반까지만 확인
        if(sum(que) == n ) {
            console.log('일치', que)
            answer ++
            que.push(i+1)
            i++
          
        }
        else if(sum(que) < n) { 
            que.push(i+1)
            i++
            
        }
        else if(sum(que) > n){
            que.shift(i)
        }
    }
    
    return answer;
}



console.log(solution2(2))
console.log(solution2(3))
console.log(solution2(15))