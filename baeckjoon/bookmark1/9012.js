const fs = require('fs');
const [n, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `3
((
))
())(()`
)
    .trim()
    .split("\n");

const sol = input => {
    let inputArr = input.split("");
    let result = 0;
    for (const x of inputArr) {
        if (x == '(') {
            result++;
        } else {
            result--;
        }
        if (result < 0) {
            break;
        }
    }
    if (result == 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
};

for (const x of arr) {
    sol(x);
}
