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

let isPalindrome1 = function (x) {
    let temp = x.toString()
    let state = false
    for (let a = 0; a < temp.length; a++) {
        if (temp[a] !== temp[temp.length - 1 - a]) {
            break
        }
        if (a === Math.floor(temp.length / 2)) {
            state = true
            break
        }
    }
    return state
}
