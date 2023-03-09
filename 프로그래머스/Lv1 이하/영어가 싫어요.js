//문제 출처 https://school.programmers.co.kr/learn/courses/30/lessons/136798

/*문제 설명
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.


제한사항
numbers는 소문자로만 구성되어 있습니다.
numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
1 ≤ numbers의 길이 ≤ 50
"zero"는 numbers의 맨 앞에 올 수 없습니다.


입출력 예
numbers	                                        result
"onetwothreefourfivesixseveneightnine"	        123456789
"onefourzerosixseven"	                        14067

*/

//풀이 


function solution(numbers) {
    var answer = 0;
    return numbers.replaceAll("one", 1).replaceAll('two',2).replaceAll("three",3).replaceAll('four',4).replaceAll('five',5).replaceAll('six',6).replaceAll('seven',7).replaceAll('eight',8).replaceAll('nine',9).replaceAll('zero',0)*1
}

//위와 같은 코드를 짜면 되긴 하지만 마음에 들지 않아서 

//어떻게 반복하여 코드를 적지 않고 풀수 잇을지 하며 다른풀이를 보았다.



function solution(numbers) {
     const obj = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };

     const regex = new RegExp(Object.keys(obj).join('|'), 'g');
    // Object.keys(obj).join('|') 를 할시.
    //'zero|one|two|three|four|five|six|seven|eight|nine' 이렇게 출력됨.
    // regex 에 대입해준다.

    return parseInt(numbers.replaceAll(regex, v => obj[v]));
    // 위에 것을 바탕으로 정규표현식 regex를 넣어주고 그것을 오브젝트 키를 이용해 바꾸어준다.
    

}

// 위와 같이 풀이한 방법을 살펴보았다.
// 오브젝트와 정규표현식을 사용하여 단순반복과정없이 해결하였다. 
// 오브젝트를 이렇게 활용할수 있구나. 


