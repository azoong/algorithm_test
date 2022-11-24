function solution(price, money, count) {
    var atp = 0
    var tp = 0
    // var answer = 0
    for (i=1; i <count+1; i++){
        atp = (price*i)
        tp += atp
    }
    return money>= tp ? 0 : tp-money
    // if(money >= tp){
    //     answer = 0
    // }else{
    //     answer = tp - money
    // }
    // return answer
}