//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/131127

/*문제 설명

출처 참고

*/

const want = ["banana", "apple", "rice", "pork", "pot"]
const number = [3, 2, 2, 2, 1]
const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]


//풀이

function solution(want, number, discount) {
  let answer = 0
  const wantMap = new Map()
  // 필요한 물품 개수 정리
  for (let i = 0; i<want.length; i++){
      wantMap.set(want[i], number[i])
  }
  // 할인 품목 개수 확인후 비교.
  loop : for (let i = 0; i <= discount.length - 10; i++){
      let slice = discount.slice(i,i+10)
      let discountMap = new Map()
      slice.forEach((item) => discountMap.set(item, (discountMap.get(item)||0) +1))
      //할인 품목 객체를 만들어준다.
      //객체의 값을 비교
      for(let j = 0; j<want.length; j++){
          if(wantMap.get(want[j]) !== (discountMap.get(want[j])||0)) continue loop;
      }
      answer ++
  }

  return answer;
}


// function solution(want, number, discount) {
//     let answer = 0;
//     const isMatch = (discount) => {
//       const wantMap = new Map();
//       discount.forEach((d) => wantMap.set(d, (wantMap.get(d) || 0) + 1));
//       for (let i = 0; i < want.length; i++) {
//         // 총개수가 10개로 정해져있기 때문에 값이 크더라도 탈락시킵니다
//         if (wantMap.get(want[i]) !== number[i]) return false;
//       }
//       return true;
      
//     };
//     for (let idx = 0; idx <= discount.length - 10; idx++) {
//         const d = discount.slice(idx, idx + 10);
//         if (isMatch(d)) answer++;
//       }
//       return answer;
// }


console.log(solution(want,number,discount))