/**
 * https://leetcode.com/problems/ransom-note/
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomNoteMap = makeMap(ransomNote);
    const magazineMap = makeMap(magazine);

    for (const x of magazineMap.keys()) {
        if (ransomNoteMap.has(x)) {
            ransomNoteMap.set(x, ransomNoteMap.get(x) - magazineMap.get(x));
        }
        if (ransomNoteMap.get(x) > 0) {
            return false;
        }
    }
    for (const x of ransomNoteMap.values()) {
        if(x > 0) return false
    }
    return true
};

var canConstruct2 = function(ransomNote, magazine) {
    const magazineMap = makeMap(magazine);

    for (const char of ransomNote) {
        if (!magazineMap.has(char) || magazineMap.get(char) === 0) {
            return false;
        }
        magazineMap.set(char, magazineMap.get(char) - 1);
    }

    return true;
};

const makeMap = s => {
    const result = new Map();
    for (const x of s) {
        if (result.has(x)) {
            result.set(x, result.get(x) + 1);
        } else {
            result.set(x, 1);
        }
    }
    return result;
};

const ransomNote = "aa", magazine = "aab"
console.log(canConstruct2(ransomNote, magazine));