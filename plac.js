	
// function solution(N, stages) {
//     let result = [];
//     for(let i=1; i<=N; i++){
//         let reach = stages.filter((x) => x >= i).length;
//         let curr = stages.filter((x) => x === i).length;
//         result.push([i, curr/reach]);
//     }
    
//     result.sort((a,b) => b[1] - a[1]);
//     return result.map((x) => x[0]);
// }


// console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]))


abc = 'abcdefghijklmnopqrstuvwxyz'


function x(str, count = 0){
    if(str[0]== "x") return count
    count ++  
    return x(str.slice(1,),count)
}

console.log(x(abc))

console.log(x('12345x'))