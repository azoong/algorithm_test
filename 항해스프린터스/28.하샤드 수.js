function solution(x) {
    // x[i] 수들을 추출해서 다 더한다 변수 sum으로 둠
    // x%sum == 0 이면 true : false
    var arr = x +'' //문자열로 변환
    var arr_list = arr.split('') //문자열 배열로 변환
    var num_list = arr_list.map((a)=> Number(a)) //숫자 배열로 변환
    var sum = num_list.reduce((a,b)=> a+b) //숫자배열 합구함
    
    
    // var answer = true;
    return (x % sum == 0) ? true : false
}