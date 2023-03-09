//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/120907

/*문제 설명

덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
- 연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 
단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
- 1 ≤ quiz의 길이 ≤ 10
- X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 
각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
- X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
- -10,000 ≤ X, Y ≤ 10,000
- -20,000 ≤ Z ≤ 20,000
- [연산자]는 + 와 - 중 하나입니다.

입출력 예
quiz	                        result
["3 - 4 = -3", "5 + 6 = 11"]    ["X", "O"]


*/


//풀이

function solution(quiz) {
    var answer = [];
    for (let i of quiz){    //for of 문을 통해 차례대로 인덱스 하나씩 가져온다.
        let z = i.split(" ")//가져온 인덱스를 공백기준으로 나누어준다. 숫자를 정확히 파악하기위함
        if(z[1] === "+"){   //그후 연산자가 위치한 인덱스를 if문을 돌려 계산해준다.
            Number(z[0]) + Number(z[2]) === Number(z[4]) ? answer.push("O"):answer.push("X")
        }
        else if(z[1] === "-"){
            Number(z[0]) - Number(z[2]) === Number(z[4]) ? answer.push("O"):answer.push("X")
        }
    }
    return answer;
}

