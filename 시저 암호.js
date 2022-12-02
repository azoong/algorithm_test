

console.log('=================================')


function solution(s, n) {
    //스플릿으로 일단 나눈다.
    //문자열 인덱스를 만든다. 2번
    //indexof(를 통해 ) 인덱스를 찾고 인덱스 번호에 n을 더해준다.
    const Lower = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    const Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    answer = ''
    for (i=0; i<s.length; i++){
        if (Lower.includes(s[i])){
            answer += Lower[Lower.indexOf(s[i]) + n]
        }if (Upper.includes(s[i])){
            answer += Upper[Upper.indexOf(s[i]) + n]
        }if (s[i]== ' '){
            answer += ' '
        }
    }
    
    return answer;
}

console.log(solution("a B z",4))
console.log('=================================')