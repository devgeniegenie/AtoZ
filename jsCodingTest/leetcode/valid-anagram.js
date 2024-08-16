/**
 * https://leetcode.com/problems/valid-anagram/
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    if (s.split('').sort().join('') === t.split('').sort().join('')) {
        return true
    }
    return false;
};

var isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);
    const baseCharCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - baseCharCode]++;
        count[t.charCodeAt(i) - baseCharCode]--;
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) return false;
    }

    return true;
};

var isAnagram3 = function (s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (!map.has(char)) {
            return false;
        }
        map.set(char, map.get(char) - 1);
        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    return map.size === 0;
};

const s = "anagram", t = "nagaram"
console.log(isAnagram3(s, t));