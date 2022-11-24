function solution(n){
    //n을 다쪼개는 배열을 만든다음 전부다 더한다.
    const answer = 0
    const num = n+''
    // 숫자열은 객체를 나눌수 없기에 문자열로 변환
    // 숫자열에 +'' 해주면 쉽게 문자열로 바꿀수 있다.
    var b = 0
    for (var i of num){
        var a = Number(i)
        b += a
        }
    return answer + b
}