//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/131128

/*
문제 설명


두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

제한사항
3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
X, Y는 0으로 시작하지 않습니다.
X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.


*/

//풀이

//시간초과 실패
//반복문이 2개들어가서 그런지 타임아웃에 걸리고 말았다.
function solution(X, Y) {
    let Num = []
    for (let i of X){
        for (let j=0; j<Y.length; j++){
            if(i == Y[j]){
                Num.push(Y[j])
                Y = Y.replace(Y[j], "")
                break
            }
        }
    }
    if(Num.length == 0) return "-1"
    let answer = Num.sort((a,b)=>b-a).join('')
    return answer[0] == "0" ? "0" : answer
}

//테스트 케이스에서 걸린다. 숫자 범위가 3,000,000로 너무 큰 숫자가 들어가서 그런거 같다. 
function solution(X, Y) {
    let Num = []
    for (let i=0; i<10; i++){
        let n = Math.min(X.length - X.replaceAll(i,"").length,Y.length - Y.replaceAll(i,"").length) 
        let z = String(i)
        if(n)Num.push(z.repeat(n))
    }   
    if(Num.length == 0) return "-1"
    let answer = Num.sort((a,b)=>b-a).join('')
    return answer
}

// 해결을 못찾아서 풀이를 수정하였다.
// 굳이 배열을 쓰지 않고, 스트링에 그냥 더하면 된다는걸 알앗다.
// 반복문도 9부터 0까지 큰수부터 내려가면 정렬을 안해도 되서 작업이 하나 준다.

function solution(X, Y) {
    let Num = ''
    for (let i=9; i>=0; i--){
        let n = Math.min(X.length - X.replaceAll(i,"").length,Y.length - Y.replaceAll(i,"").length) 
        let z = String(i)
        if(n) Num += (z.repeat(n))
    }   
    if(Num.length == 0) return "-1"
    
    return Num[0] == 0 ? "0" : Num
}

console.log(solution("120330","021334500"))

console.log(solution("100","02334500"))