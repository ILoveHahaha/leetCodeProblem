/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let pattern = /(M{0,3})(D?C{0,3}|C[MD])(L?X{0,3}|X[LC])(V?I{0,3}|I[VX])$/
    let tempObj = {
        'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII':8, 'IX': 9,
        'X': 10, 'XX': 20, 'XXX': 30, 'XL': 40, 'L': 50, 'LX': 60, 'LXX': 70, 'LXXX': 80, 'XC': 90,
        'C': 100, 'CC': 200, 'CCC': 300, 'CD': 400, 'D': 500, 'DC': 600, 'DCC': 700, 'DCCC': 800, 'CM': 900,
        'M': 1000, 'MM': 2000, 'MMM': 3000
    }
    let temp = pattern.exec(s)
    let tempNum = 0
    for(let a = 1; a < temp.length; a++) {
        if (temp[a] !== '') {
            tempNum += tempObj[temp[a]]
        }
    }
    return tempNum
};

var romanToInt1 = function(s) {
  let array = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000
    }

  var result = 0;
  for(var i = 0; i < s.length; i++) {
    result += array[s[i]] * (array[s[i]] < array[s[i+1]] ? -1 : 1)
  }

  return result;
}
