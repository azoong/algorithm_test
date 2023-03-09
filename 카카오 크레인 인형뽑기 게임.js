//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/64061

/*문제 설명

문제가 너무 길기에 출처 참고

*/

//풀이

function solution(board, moves) {
    let stack = []
    var answer = 0;
    for (let temp of moves){
        for(let i = 0; i<board.length; i++){
            if(board[i][temp-1] !== 0){
                stack.push(board[i][temp-1])
                board[i][temp-1] = 0
                break
            }
        }
        //루프를 활용하여 0이 아닌 숫자가 나오면 스택에 추가해준다.
        //스택에 추가한뒤 0으로 값을 변환해준뒤 break로 다음 루프로 
        if(stack.length && stack[stack.length-1] == stack[stack.length-2]){ 
        //스택을 활용해서 연속으로 동일한 값이 들어오면 삭제해준다.
        //스택의 값이 아예 없을 경우를 생각해서 stack.lenght 를 넣어준다(처음에 빠뜨려서 테케 실패)
            stack.splice(stack.length-2)
            answer += 2
        }
    }
    return answer;
}

// 



console.log(solution([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [1, 2, 3, 4]  ))