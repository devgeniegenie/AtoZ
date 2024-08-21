/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 */

var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const result = [];
    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const DFS = (l, r) => {
        if (l === digits.length) {
            result.push(r);
            return;
        } else {
            for (let i = 0; i < keyboard[digits[l]].length; i++) {
                DFS(l + 1, r + keyboard[digits[l]][i]);
            }
        }
    };
    DFS(0, "");
    return result;
};

var letterCombinations2 = function (digits) {
    const result = [];
    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const DFS = (l, inputDigits, r) => {
        if (l === inputDigits.length) {
            if (r != "") result.push(r);
        } else {
            for (let i = 0; i < keyboard[inputDigits[l]].length; i++) {
                let temp = r;
                r += keyboard[inputDigits[l]][i];
                DFS(l + 1, inputDigits, r);
                r = temp;
            }
        }
    };
    DFS(0, digits, "");
    return result;
};

const digits = "23";
console.log(letterCombinations(digits));