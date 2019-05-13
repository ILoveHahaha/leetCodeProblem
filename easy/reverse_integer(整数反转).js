/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var temp = x > 0 ? x : -x
    var state = x > 0 ? '' : '-'
    temp = temp.toString().split("").reverse().join("")
    if (-temp < Math.pow(-2, 31)) return 0
    else if (temp > Math.pow(2, 31) - 1) return 0
    else {
        return state + temp
    }
};