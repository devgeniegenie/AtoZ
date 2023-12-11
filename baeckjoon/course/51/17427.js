const fs = require('fs');
const [n, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `10000`
)
    .trim()
    .split("\n");

const input = Number(n);

const sol = n => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += Math.floor(n / i) * i;
    }
    return result;
};

console.log(sol(input));