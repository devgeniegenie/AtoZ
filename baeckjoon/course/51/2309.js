const fs = require('fs');
const [...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `20
7
23
19
10
15
25
8
13`
)
    .trim()
    .split("\n");

const input = arr.map(e => Number(e)).sort((a, b) => a - b);
let sum = input.reduce((prev, cur) => prev + cur, 0);
let a = 0;
let b = 0;

for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if (sum - input[i] - input[j] == 100) {
            a = i;
            b = j;
        }
    }
}

for (let i = 0; i < input.length; i++) {
    if (i != a && i != b) {
        console.log(input[i]);
    }
}