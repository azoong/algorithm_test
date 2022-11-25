/*
문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
입출력 예
n	lost	reserve	return
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	4
3	[3]	[1]	2
입출력 예 설명
예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.
*/

function solution(n, lost, reserve) {
    const newLost=[]                        //새로운 배열에 push 가아닌 splice를 사용시
    const newReserve=[]                     //중간 중간 생략되어버리는 숫자가 생겨서 테스트케이스 통과 x
    for(const c of lost){          
        if(!reserve.includes(c)){           //먼저 여벌 체육복이 있는 학생이 도난당했을 경우를 생각해서 배열을 정리해준다.
            newLost.push(c)
        }
    }
     for(const c of reserve){
        if(!lost.includes(c)){
            newReserve.push(c)
        }
    }
    newLost.sort()                
    newReserve.sort()
/* 정렬을 안할시 오류발생
ex) n = 10
lost= [3, 5, 7]

reserve = [4, 6, 8]
이 때 작은 숫자부터 시작해서 큰 것 부터 지운다면
reserve = 4 --> 5 지움
           6 --> 7 지움
∴ lost에 3이 남아 9가 출력된다. 답은 10이므로 실패
*/
    for(const b of newReserve){ 
        if(newLost.includes(b-1)){
            console.log(b-1)
            let clearlost = newLost.indexOf(b-1)    //중복되는 b값의 인덱스를 찾아서 splice로 b값 만 지워준다.
            newLost.splice(clearlost,1)
        }else if(newLost.includes(b+1)){
            console.log(b+1)
            let clearlost = newLost.indexOf(b+1)
            newLost.splice(clearlost,1)   

        }
    }
    
    console.log(n - newLost.length)
    return n - newLost.length
    
}
