const fs = require('fs');
const [n] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `23`
)
    .trim()
    .split("\n");

const stick = 64;
const input = Number(n);

while (true) {

}