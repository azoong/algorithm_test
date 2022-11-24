function solution(arr, divisor) {
    // divisor 로 나누었을때 0 이면 리턴
    // var r_div = arr[i]%divisor === 0
    var result = [];
    for (i=0; i < arr.length; i++){
        if (arr[i]%divisor === 0 ){
            result.push(arr[i])
        }
       
    }
    if (result.length === 0){
            result.push(-1)
    }
    return result.sort((a, b) => a - b)
}