//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/17681

/*문제 설명

링크 참조
*/

//풀이



function solution(n, arr1, arr2) {
    //각 배열을 먼저 2진수로 변환하고 앞에 0을 n자리 만큼 채워준다.
    let map1 = arr1.map(a => a.toString(2))
    for (i=0; i<arr1.length; i++) {
        if (map1[i].length < n) map1[i] = "0".repeat(n - map1[i].length) + map1[i]
    }
    let map2 = arr2.map(a => a.toString(2))
    for (i=0; i<arr2.length; i++) {
        if (map2[i].length < n) map2[i] = "0".repeat(n - map2[i].length) + map2[i]
    }

    //변환한 배열을 조건에 맞게 '#'으로 바꿔준다.
    let result = []
    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            map1[i][j] == 1 || map2[i][j] == 1 ? result+="#" : result+=" "
        }
    }
    var answer = []

    //변환한 배열 n만큼 나누어 주는 함수를 만들어서 적용
    const split = (array, N) =>{
        const arr = []
        let i = 0
        while(array.length > i){
            arr.push(array.slice(i,i+N))
            i += N
        }
        return arr
    }    
   
    answer = split(result,n)
    
    return answer;
}

// 다른사람의 풀이

	
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}

//비트 연산자를 몰랏는데 비트연산자라는 것을 적용하면 좀더 간편하게 풀 수 있다. 



