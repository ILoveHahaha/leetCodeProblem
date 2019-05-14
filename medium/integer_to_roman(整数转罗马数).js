/**
 * @param {number} num
 * @return {string}
 */
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


let intToRoman1 = function (num) {
    var temp1 = ["", "M", "MM", "MMM"];
    var temp2 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var temp3 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var temp4 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return temp1[Math.floor(num / 1000)] + temp2[Math.floor(num % 1000 / 100)] + temp3[Math.floor(num % 100 / 10)] + temp4[num % 10];
}