function solution(n) {
    let k = n+1
    let answer = k.toString(3)
    answer = answer + ''
    let temp =answer[0] 
    answer =answer.slice(1).replaceAll('2','4')
    answer =answer.replaceAll('1','2')
    answer =answer.replaceAll('0','1')
    
    
    return temp + answer;
}

console.log(solution(10))