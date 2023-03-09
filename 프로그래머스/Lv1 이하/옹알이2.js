function solution(babbling) {
    const can = ['aya','ye','woo','ma']
    let answer = 0;
    for (let babble of babbling){
        for(const i of can){
            if (babble.includes(i.repeat(2))) break
            babble = babble.replace(i,'!')
            if(!babble.replaceAll('!','')) {
                answer ++
                break
            }
        }
    }
    return answer;
}

console.log(solution(['ayayeaya']))