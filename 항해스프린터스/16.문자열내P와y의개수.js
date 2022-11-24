function solution(s) {

    var countp = 0
    var county = 0
    // p와 y의 개수를 추출
    for (i = 0; i < s.length; i++) {
        if (s[i] === 'p') countp += 1
        if (s[i] === 'P') countp += 1
        if (s[i] === 'y') county += 1
        if (s[i] === 'Y') county += 1
    }
    // p와 y의 개수를 비교 if문으로 True :False로 출력하면될듯
    var answer = countp === county ? true : false
    return answer
}