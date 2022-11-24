
function solution(absolutes, signs) {
     var answer = 0
     for( i = 0 ; i < absolutes.length; i++){  
        
        var si = signs[i] == true ? 1 : -1;
        result = absolutes[i]*si
        answer += result
        }   
     return answer
}
 