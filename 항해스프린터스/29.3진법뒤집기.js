function solution(n) {
    var num = n.toString(3)
    var num_list = num.split('')
    var r_list = num_list.reverse()
    var tri_num = r_list.join('')
    return parseInt(tri_num,3)
}