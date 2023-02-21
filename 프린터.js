//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/42587

/*문제 설명

출처 잠고

//풀이
대기목록에 추가한 순서대로 처리하고, 새로추가된 작업은 대기열의 맨뒤로 가니 큐를 사용하기 적합한 문제이다.
큐를 사용하기위해 연결리스트를 만들어주고 그에 맞춰서 처리해준다.
*/


//노드 클래스
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

//연결리스트 기반 큐 클래스
class Queue {
    constructor(){
        this.firstNode = null
        this.lastNode = null
    }
    
    enqueue (value){
        const newNode = new Node(value)
        if(!this.firstNode){
            this.firstNode = newNode
            this.lastNode = newNode
        }else{
            this.lastNode.next = newNode
            this.lastNode = newNode
        }
    }
    
    dequeue (){
        const deleteNode = this.firstNode.value
        this.firstNode = this.firstNode.next
        return deleteNode
    }
    
    peek(){
        return this.firstNode.value
    }
}



function solution(priorities, location) {
    let queue = new Queue()
    //값과 인덱스를 기록해서 루프를 돌려준다.
    for (let i = 0 ; i<priorities.length ; i++){
        queue.enqueue([priorities[i], i])
    }
    //중요도에 따라 내림차순으로 정렬해준다.
    priorities.sort((a,b) => b-a)
    //값을 비교해서 기준값(정렬된 대기목록)보다 중요도가 작으면. 대기목록에 뒤로 보내주고
    //그렇지 않으면 목록에서 처리해준다 카운트를 1올린다. 그후 인데스값을 확인후 일치하면 리턴
    let count = 0
    while(true){
        let currValue = queue.peek()
        if(currValue[0] < priorities[count]){
            queue.enqueue(queue.dequeue())
        }else{
            const value = queue.dequeue()
            count ++
            if(location === value[1]){
                return count
            }
        }
        
    }
    
}

console.log(solution([2,1,3,2],2))