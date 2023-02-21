//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/12909

/*문제 설명


괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

*/

//풀이 

//기본적인 스택 문제이다.

//1차 풀이 
function solution(s){
    let stack = []
    for (let el of s){
        if (el == "(" ) stack.push(el)
        else if(el == ")"){
            if(stack.length)  stack.pop()
            else return false
        } 
    }
    if (stack.length) return false
    var answer = true;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

//효율성 테스트에서 실패 하였다. 시간초과.

//2차 풀이

function solution(s){
    let stack = []
    if(s[s.length-1] == "(" ||s[0] == ')') return false
     //마지막 괄호와 첫괄호를 확인하는 검사를 추가하니 통과하였다.
    for (let el of s){
        if (el == ")") {
            if(stack.length) stack.pop()
            else return false
        }else{
            stack.push(el)
        }

    }
    if (stack.length) return false
    var answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

//마지막 풀이. 좀더 깔끔히 정리.
function solution(s){
    let stack = []
    for (el of s){
        if(el == "(") stack.push("(")
        else{
            if(stack.length) stack.pop()
            else return false
        }
    }
    if (stack.length) return false
    else return true
    

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

}

// 다른 풀이를 참고하니 괄호가 () 뿐이니 stack말고 count 를 사용하여 숫자를 더하고 빼주었다.
// 이경우 배열을 쓴것보다 훨씬 빠른 속도가 나온다.

//예시

function solution(s){
    let cnt=0;

    if(s[s.length-1]==='(' || s[0]===')') return false;

    for(let i=0; i<s.length; i++){ 
        s[i]==='(' ? cnt++ : cnt--;
        if(cnt<0) break;
    }

    return cnt===0 ? true : false;
}
