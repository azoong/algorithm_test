function solution(arr) {
    //arr 을 오름차순으로 정렬 한후
    // arr 에서 0번째 인덱스를 삭제해줌
    var num = arr.map(a => a) //sort 하면 arr이 바껴 num으로 따로지정
    var min = num.sort((x, y) => x - y) [0] //최소값
    // var result = []
    // result.push(min); 
    //arr에서 최소값(result)를 없애줘야함
    //fileter메소드를 사용해서 end에 새로 맵핑
    var end = arr.filter(min_num => min_num > min)
    
    
    // var answer = [];
    return end.length == 0 ? [-1] : end
}