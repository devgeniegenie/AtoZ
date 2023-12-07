const fs = require('fs');
const [n, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `1
2`
)
    .trim()
    .split("\n");

const input = arr[0].split(' ').map(e => Number(e));
if (input.length < 2) {
    console.log(input[0] ** 2);
} else {
    console.log(Math.max(...input) * Math.min(...input));
}