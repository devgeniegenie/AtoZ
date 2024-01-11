const fs = require('fs');
const [n, arr1, m, arr2] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`
)
    .trim()
    .split("\n");

const input1 = arr1.split(" ").map(e => Number(e)).sort((a, b,) => a - b);
const input2 = arr2.split(" ").map(e => Number(e));

const tempMap = new Map();
input1.forEach(e => {
    if (tempMap.has(e)) {
        tempMap.set(e, tempMap.get(e) + 1);
    } else {
        tempMap.set(e, 1);
    }
});

let result = '';
input2.forEach(e => {
    if (tempMap.get(e)) {
        result += tempMap.get(e) + ' ';
    } else {
        result += '0 '
    }
})

console.log(result);