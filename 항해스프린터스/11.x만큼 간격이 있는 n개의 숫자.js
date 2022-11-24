function solution(x, n) {
    var result = []
    for (i = 0; i < n; i++){
        var a = 0 
        a = x +(x*i) 
        result.push(a)
    }
    return result;
}