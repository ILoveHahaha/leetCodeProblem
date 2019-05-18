/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let temp = '', currIndex = 0, strIndex = 0, tempChar = ''
    if (strs[0][0]) {
        tempChar = strs[0][0]
    }
    else return temp
    while (currIndex < strs.length) {
        if (strs[currIndex][strIndex] === undefined) {
            break
        }
        else {
            if (tempChar === strs[currIndex][strIndex]) {
                tempChar = strs[currIndex][strIndex]
            }
            else {
                break
            }
            currIndex++
            if (currIndex === strs.length) {
                temp += tempChar
                strIndex++
                tempChar = tempChar = strs[0][strIndex]
                currIndex = 0
            }
        }
    }
    return temp
};
