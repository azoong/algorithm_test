function solution(s) {
    var test = 1
    // 길이가 4,6인지 먼저 확인
    if (s.length === 4 || s.length === 6){
    // e가 포함되었는지 아닌지 확인
        if(s.includes('e')){
            return false
        }else if(isNaN(s)){
    // isNaN = 숫자가 아니면 true반환       
            return false
        }else {
            return true
        }
    }else{
        return false
    } 
}