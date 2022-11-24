function solution(sizes) {
   // 가로,세로 상관없이 큰값을 a ,작은값을 b
   // a 중 가장큰값을 고르고 b중 가장큰값을 구해서
   // a*b를 해준다 
   var a = []
   var b = []
   for (i = 0; i < sizes.length; i++) {
      a.push(Math.max(sizes[i][0], sizes[i][1]))
      b.push(Math.min(sizes[i][0], sizes[i][1]))
   }
   answer = a.reduce((a, b) => a > b ? a : b) * b.reduce((a, b) => a > b ? a : b)

   return answer;
}