const fs = require('fs');
const [n] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `7 3`
)
    .trim()
    .split("\n");

const a = Number(n.split(" ")[0]);
let b = Number(n.split(" ")[1]);

let arr = Array.from({length: a}, (_, i) => i + 1);
let queue = [];
let cnt = 1;
while (arr.length) {
    let el = arr.shift();
    if (cnt % b == 0) {
        queue.push(el);
    } else {
        arr.push(el);
    }
    cnt++;
}
console.log(`<${queue.join(", ")}>`)