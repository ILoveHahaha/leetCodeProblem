/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let temp = '', currIndex = 0, strIndex = 0, tempChar = ''
    if (strs[0]) {
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

var longestCommonPrefix1 = (strs) => {
    if (!strs) return '';

    // 数组长度小于2，直接返回空
    const length = strs.length;
    if (length < 2) return strs[0] || '';

    // 有空元素直接返回空
    if (/\b(undefined|null|\s)\b/.test(strs.join())) return '';

    let firstStr = strs[0];

    // 递归进行二分法查找
    const loop = (start, end, str) => {
        // 下标超出范围, 结束并返回空字符串
        if (start > end) return '';

        // 取中间下标, >> 右移一位相当于除2, 右移n位相当于除以2的n次方。
        const middle = start + ((end - start) >> 1);

        // 截取字符，循环遍历是否存在于所有元素，根据情况进行下一轮二分查找
        let s = str.slice(0, middle);
        for (let i = 1; i < length; i += 1) {
            if (strs[i].slice(0, middle) !== s) return loop(start, middle - 1, s) || '';
        }
        return loop(middle + 1, end, str) || s;
    };

    // loop(startIndex + 1， endIndex + 1, str)
    return loop(1, firstStr.length, firstStr);
};
