function solution(arr1, arr2) {
    var answer = []
    //arr1 [["0,0,0","0,0,1"],[["0,1,0","0,1,1"]]
    //arr1 [["1,0,0"]],       [["1,1,0",]]
    for( i = 0 ; i < arr1.length; i++ ){
        var b = []
        for (j = 0 ; j < arr1[i].length; j++){
            b.push(arr1[i][j] +arr2[i][j])
        }
        answer.push(b)
    }
    return answer;
}