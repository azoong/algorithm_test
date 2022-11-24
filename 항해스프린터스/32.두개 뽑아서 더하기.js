function solution(numbers) {
    // number를 이중 포문을 돌려서 더한다.
    // 더한값에 if문을 넣어 없는 수일시 더한다.
    // 리턴해주기전에 오름차순으로 정렬
var answer = []
for (i = 0; i<numbers.length; i++){
    for (j = 0; j<numbers.length; j++){
        if(i !== j){
            if (answer.includes(numbers[i] + numbers[j]) !== true){
                answer.push(numbers[i] + numbers[j])
                console.log(numbers[i]+ numbers[j])
            }
            
        }
    }
}
    
return answer.sort(function(a, b) { return a - b;}) 
    
}