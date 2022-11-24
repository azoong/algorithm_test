function solution(n) {
    var num = n+''
    var result = []
    var answer = ''
    for (i= 0; i <num.length; i++){
        result.push(num[i])
    }
    sortresult = result.sort((a,b) => b - a)
    return  Number(sortresult.join(''))
    
   
}
                   