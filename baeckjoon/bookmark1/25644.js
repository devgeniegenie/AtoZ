const fs = require('fs');
const [n, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `4
7 1 2 6`
)
    .trim()
    .split("\n");

const input = arr[0].split(' ').map(e => Number(e));

let result = 0;
for (let i = 0; i < n - 1; i++) {
    for(let j = i + 1; j < n; j++) {
        result = Math.max(input[j] - input[i], result);
    }
}
console.log(result);

