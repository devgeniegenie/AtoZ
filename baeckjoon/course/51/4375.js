const fs = require('fs');
const [...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `3
7
9901`
)
    .trim()
    .split("\n");

for (const x of arr) {
    let n = 0;
    let cnt = 1;
    while (true) {
        if (((n * 10) + 1) % x == 0) {
            console.log(cnt);
            break;
        } else {
            n = 10 * n + 1;
            cnt++;
        }
    }
}