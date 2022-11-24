function solution(num) {
    var count = 0
    var a = num
    // 1은 0으로 빼두고 
    // 와일문을 돌려서 a= 1 이 나오면 break 아니면 계속 반복하는 반복문 작성
    if (num == 1) {
        return count
    }else {
        while( a > 1 ){
            if(count >500){
                count = -1
                break
            }
            if(a % 2 == 0 ) {
                a = a/2 ;
                count += 1;
                continue
            }
            if(a % 2 == 1 ) {
                a = a*3 + 1 ;
                count += 1 ;
                continue
            }
        }return count
    
        
    }
  
}