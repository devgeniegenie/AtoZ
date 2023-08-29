const n = 5;
const m = 14;

const mySol = (n, m) => {
    let jump = [-1, 1, 5];
    let ch = Array.from({length: 10001}, () => 0);
    let queue = [];
    queue.push(n);
    ch[n] = 1;
    let L = 0;

    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let x = queue.shift();
            for (let y of jump) {
                let nx = y + x;
                if (nx === m) return L + 1;
                if (nx > 0 && nx <= 10000 && ch[nx] == 0) {
                    ch[nx] = 1;
                    queue.push(nx);
                }
            }
        }
        L++;
    }
}

console.log(mySol(n, m));