function solution(arr) {
    var a = arr.reduce(function (a,b){return a + b})
    var answer = a/arr.length
    return answer;
}