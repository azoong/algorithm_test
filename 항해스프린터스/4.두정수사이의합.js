function solution(a, b) {
    var answer = 0
    for (var num = Math.min(a, b); num <= Math.max(a, b); num++) {
       answer += num;
    }
    
    return answer;
}
