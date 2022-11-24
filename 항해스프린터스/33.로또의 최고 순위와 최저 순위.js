function solution(lottos, win_nums) {
var count = 0
var count_0 = 0
    for (i=0; i< lottos.length; i++){
        if (win_nums.includes(lottos[i])) {
        
            count += 1 ;
            count_0 += 1
        }
        if (lottos[i] == 0){
            count_0 += 1
        }
    }
    
    var rank = [6,6,5,4,3,2,1]

    var answer = [rank[count_0 ], rank[count ]]
    return answer
}