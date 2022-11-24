function solution(phone_number) {
    var a = phone_number.substr(-4)
    var b = '*'.repeat((phone_number.length-4))
    var answer = b+a;
    return answer;
}