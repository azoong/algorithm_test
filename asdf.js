
const arr = [1,2,3,6,7,8,1,3]

let filter = arr.reduce((acc,cur,idx)=>{
    if(cur > 5){
        acc += cur
    }
    return acc
}, 0)

console.log(filter)


let map = arr.reduce((acc,cur,idx)=>{
    acc.push(cur*2)
    return acc
}, [])


console.log(map)