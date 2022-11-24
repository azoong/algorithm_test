function solution(a, b) {
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var week = ['FRI','SAT','SUN','MON','TUE','WED','THU']
    var day = 0
    var a 
    for ( i = 0; i <a-1; i++ ){
        day += month[i]
    }
    a = (day+b)-1
    return week[a%7]
}