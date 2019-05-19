/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TODO: 关键的重复区分还没做出
var threeSum = function(nums) {
    let returnArr = []
    let tempArr = nums.sort((a, b) => {
        return a - b
    })
    if (tempArr[0] > 0 || tempArr[tempArr.length - 1] < 0) return returnArr
    let lastIndex = nums.length - 1
    let currIndex = 0
    console.log(tempArr)
    for (let a = 0; a < tempArr.length - 1; a++) {
        currIndex = a + 1
        lastIndex = nums.length - 1
        // if (currIndex > 0 && tempArr[currIndex - 1] === tempArr[currIndex + 1]) continue
        // if (a > 0 && tempArr[a] === tempArr[a - 1]) continue
        while (currIndex < lastIndex) {
            if (tempArr[currIndex] + tempArr[a] + tempArr[lastIndex] === 0) {
                returnArr.push([tempArr[currIndex], tempArr[a], tempArr[lastIndex]])
                currIndex++
            }
            else if (tempArr[currIndex] + tempArr[a] + tempArr[lastIndex] > 0) {
                lastIndex--
            }
            else if (tempArr[currIndex] + tempArr[a] + tempArr[lastIndex] < 0) {
                currIndex++
            }
        }
    }
    return returnArr
};

// let test = [-5, 1, 2, 3, 4]
// let test = [-1, -1, -1, -1, 2, 2, 2, 2]
// let test = [-1, 0, 0, 0]
let test = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(test))
