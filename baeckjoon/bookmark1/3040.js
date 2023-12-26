const fs = require('fs');
const [...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `8
6
5
1
37
30
28
22
36`
)
    .trim()
    .split("\n");

const input = arr.map(e => Number(e));
let sum = input.reduce((sum, e) => sum + e, 0);

for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if (sum - input[i] - input[j] == 100) {
            for (let k = 0; k < input.length; k++) {
                if (k != i && k != j) console.log(arr[k]);
            }
            return;
        }
    }
}