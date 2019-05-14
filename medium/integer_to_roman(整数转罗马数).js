let intToRoman = function(num) {
    let tempObj = {
        1: 'I', 4: 'IV', 5: 'V', 9: 'IX',
        10: 'X', 40: 'XL', 50: 'L', 90: 'XC',
        100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
    }
    let nums = [...Object.keys(tempObj)]
    let res = ''
    let length = nums.length - 1
    while (num) {
        if (num >= nums[length]) {
            res += tempObj[nums[length]]
            num -= nums[length]
        }
        else length--
    }
    return res
};