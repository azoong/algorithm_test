

function solution(arr, n){
    let list = [...arr]
    for (let i=0; i<arr.length; i++) {
        if(list.includes(list[i])){
          list.splice(i,1)
        }
        
    // }
    // console.log(list)
    list.sort(function(a,b){
        var first  = a[n]
        var second = b[n]
        if(first === second){
            return (a > b) - (a < b); //매개변수로 받은 a,b 문자열 전체를 비교.
        }else{
            return (first < second) - (first > second); 
        }   
     })    
    return list
    }


// let arr=["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
// let n=2;
// console.log(solution(arr, n))


var arr =["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"]

console.log(arr.sort(function(a,b) {
    return -1
}))