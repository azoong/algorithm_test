//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/132265

/*문제 설명

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
입출력 예

numbers	            return
[6, 10, 2]	        "6210"
[3, 30, 34, 5, 9]	"9534330"
*/

//풀이 

//첫풀이 테스트케이스 통과 X
//시간초과 몇개 + 케이스 실패.
function solution(numbers) {
    let arr = numbers.map(a => '' + a); //문자열 배열로 변환
    for (let i = 1; i < arr.length; i++) {
        let tempValue = arr[i]
        let position = i - 1

        roop : while (position >= 0) {
            if (arr[position][0] == tempValue[0]) {
                let index = 1
                while (true){
                    if(index > arr[position].length) break roop //비교인덱스 끝까지까지 같을시 그냥 넘어감
                    else if((arr[position][index]||arr[position].slice(-1) ) == (tempValue[index]||tempValue.slice(-1))) {
                        index ++
                    }
                    else if ((arr[position][index]||arr[position].slice(-1)) < (tempValue[index]||tempValue.slice(-1))){
                        // console.log((arr[position][index]||arr[position].slice(-1)) , (tempValue[index]||tempValue.slice(-1)) )
                        arr[position+1] = arr[position]
                        // console.log(arr)
                        position --
                        break
                    }else break roop
                }
            }
            else if (arr[position][0] < tempValue[0]) {
                arr[position+1] = arr[position]
                position --
            } else break
            
        }
        arr[position+1] = tempValue
    }
   
    return  arr.join('')

}


// 반례 [0,0,0,0,0] 시 00000 이 아닌 0 출력 //해결
// 반례 [ 67,676,677] 넣을시 677,676,67 이 나와야 하지만 67,677,676이 나옴. 


// 각 자리씩 비교하지말고 간단하게 A+B 와 B+A를 비교하면 되는 방법이 떠올랐고 쉽게 아주 간단하게 해결할수 있었다.
// 반복문도 줄어들어 든다. 하지만 삽입 정렬이 느려서 실패...
function solution(numbers) {
    let arr = numbers.map(a => '' + a); //문자열 배열로 변환
    for (let i = 1; i < arr.length; i++) {
        let tempValue = arr[i]
        let position = i - 1

        while (position >= 0) {
            if (arr[position]+tempValue < tempValue+arr[position]) {
                arr[position+1] = arr[position]
                position --
            } else break  
        }
        arr[position+1] = tempValue
    }
   
    return  arr.join('')

}

// 기본 내장된 sort() 빠르므로 활요하여 풀이...
// 되게 간단히 풀이가능
function solution(numbers) {
    let arr = numbers.map(a => '' + a); //문자열 배열로 변환
    arr.sort((a,b) =>  (b+a) - (a+b))
   
    return BigInt(arr.join('')) + ''

}


const arr = ['3', '30', '33', '34', '5', '9']

console.log(solution(arr))

console.log(solution([ 67,676,677]) )


