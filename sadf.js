function uniquePaths(row, column) {
    if (row == 1 || column == 1) {
        return 1;
    }
    return uniquePaths(row - 1, column) + uniquePaths(row, column - 1);
}

console.log(uniquePaths(2,3))





const max = (array) => {
    console.log('RECURSION')
    if (array.length == 1) return array[0];
    let max_of_remainder = max(array.slice(1))
    if (array[0] > max_of_remainder) return array[0];
    else return max_of_remainder;
  };
  

//   const max = (array) => {
//     console.log('RECURSION')
//     if (array.length === 0) return -Infinity;
//     if (array.length === 1) return array[0];
//     let maxOfRemainder = max(array.slice(1));
//     return Math.max(array[0], maxOfRemainder);
//   };

  
console.log(max([2,3,8,4,4,7]))


// const max = (array) => {
//     if (array.length === 1) return array[0];
//     let maxOfRemainder = max(array.slice(1));
//     if (array[0] > maxOfRemainder) return array[0];
//     else return maxOfRemainder;
//   };

function fib(n, memo = {}){
    console.log('RECURSION')
    if( n ==0 || n ==1) return n
    if (!memo[n]){
        memo[n] = fib(n-2, memo) + fib(n-1, memo)
    }
    return memo[n]
}

console.log(fib(6))


function fib(n,)