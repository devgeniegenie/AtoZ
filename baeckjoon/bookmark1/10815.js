const fs = require('fs');
const [n, a, m, a2] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`
)
    .trim()
    .split("\n");

const arr1 = a.split(' ').map(e => Number(e));
const arr2 = a2.split(' ').map(e => Number(e));

let result = '';
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        if (arr2[i] == arr1[j]) {
            result += 1 + ' ';
        }
    }
    if (result.length == i * 2) result += 0 + ' ';
}
