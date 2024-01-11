const fs = require('fs');
const [n, m, arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `4
2
0 4`
)
    .trim()
    .split("\n");

const length = Number(n);
const number = Number(m);
const position = arr.split(' ').map(e => Number(e));

let tempArr = [0, length].concat(position).sort((a, b) => a - b);

let min = 0;
let point1 = -1;
let point2 = -1;
for (let i = 1; i < tempArr.length; i++) {
    if (min < tempArr[i] - tempArr[i - 1]) {
        point1 = tempArr[i];
        point2 = tempArr[i - 1];
        min = tempArr[i] - tempArr[i - 1];
    }
}
let result = Math.max(Math.ceil((Math.abs((point1 - point2) / 2))), position[0], length - position.at(-1));
console.log(result);