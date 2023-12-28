const fs = require('fs');
const [input] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `0001100`
)
    .trim()
    .split("\n");

let result = '';
result += input[0];
for (let i = 1; i < input.length; i++) {
    if (input[i] != input[i - 1]) {
        result += input[i];
    }
}
console.log(Math.min(result.split('0').length - 1, result.split('1').length - 1));