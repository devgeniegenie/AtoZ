const fs = require('fs');
const [...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `1 2 3 4 5`
)
    .trim()
    .split("\n");

let A = parseInt(arr[0].split(' ')[0])
let B = parseInt(arr[0].split(' ')[1])
let C = parseInt(arr[0].split(' ')[2])

console.log((A + B) % C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);