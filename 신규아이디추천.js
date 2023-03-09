
console.log('==========================================')
let new_id = "...!@BaT#*..y.abcdefghijklm"

function solution(id) {
    let idcheck = id
.toLowerCase()
.replace(/[^a-z0-9-_.]/g,"")
.replace(/\.+/g, ".")    //.replace('..','.') ...일경우에 오류가 발생한다!!!
.replace(/^\.|\.$/g,'') 
.replace(/^$/,'a')
.slice(0,15)
.replace(/\.$/g,'')
  
  if (idcheck.length === 1) idcheck = idcheck[0].repeat(3);
  if (idcheck.length === 2) idcheck = idcheck + idcheck[1];
 
    return idcheck;
}

console.log(solution(new_id))
console.log('==========================================')


// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// tolowercase() 

// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 
// 제외한 모든 문자를 제거합니다.
// ??문자 제거 어떻게 할지 모르겠음

// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// replace 사용해서 ..을 .으로 바꾸면될듯

// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
//   if 문써서 splice?

// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// if 문써서 a 대입?

// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 
// 모두 제거합니다.
// 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 
// 문자를 제거합니다.
// 문자 열 자르는거 쓴다 5단계를 6단계 뒤로 하면될듯

// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 
// 반복해서 끝에 붙입니다.

