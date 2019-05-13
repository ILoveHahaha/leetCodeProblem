/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
    if (x >= 0) {
        let temp = x, curr = 0
        while (temp) {
            curr = curr * 10 + Math.floor(temp % 10)
            temp = Math.floor(temp / 10)
        }
        if (curr === x) return true
        else return false
    }
    else {
        return false
    }
}
