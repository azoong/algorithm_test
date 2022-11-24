function solution(n) {
    const num_list = n +''
    const answer = []
    for (i=0; i< num_list.length; i++){
        answer.unshift(Number(num_list[i]))
    }
    return answer;
}