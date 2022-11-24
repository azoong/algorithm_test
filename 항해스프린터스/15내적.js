function solution(a, b) {
    var result = 0
    for (i=0; i < a.length; i++){
        s = a[i]*b[i]
        result += s
    }
    return result
}