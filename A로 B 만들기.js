//문제 출처 //문제 출처https://school.programmers.co.kr/learn/courses/30/lessons/120886

/*문제 설명

문자열 before와 after가 매개변수로 주어질 때, 
before의 순서를 바꾸어 after를 만들 수 있으면 1을, 
만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < before의 길이 == after의 길이 < 1,000
before와 after는 모두 소문자로 이루어져 있습니다.

입출력 예
before	||  after	||result
"olleh"	|| "hello"	||  1
"allpe"	|| "apple"	||  0

*/


function solution(before, after) {
    var a = after
    for (i = 0; i<before.length; i++){
        if (a.includes(before[i])) {    //반복문을 돌려서 동일한 글자를 포함하고 잇으면 a 에서 하나씩 제거해준다.
            a = a.replace(before[i],"") //모든 글자가 겹쳐서 없어지면 글자가 똑같은것이기에 1을 리턴 아니면 0리턴.
        }
    }
    if (a.length === 0){
        return 1
    }else{
        return 0
    }
    
}

// 다른 풀이

function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

//비포와 애프터를 둘다 정렬시켜서 같으면 같은 단어...
