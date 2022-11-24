function solution(s) {
    a = s.length 
    if (a % 2 == 1){
        result = s.slice(a/2,a/2+1)
        var answer = result;
        
    }else{
        result = s.slice(a/2-1 ,a/2+1 )
        var answer = result;
    }
    return answer;
}


function solution(s) {
    a = s.length 
    if (a % 2 == 1){
        result = s.substr(a/2,1)
        var answer = result;
        
    }else{
        result = s.substr(a/2-1 ,2 )
        var answer = result;
    }
    return answer;
}