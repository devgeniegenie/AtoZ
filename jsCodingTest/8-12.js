const n = 33;
const r = 19;

/*const mySol = (n, r) => {
    const DFS = (n, r) => {
        if (n === r || r === 0) {
            return 1;
        } else {
            return DFS(n - 1, r - 1) + DFS(n - 1, r);
        }
    }
    console.log(DFS(n, r));
}

mySol(n, r);*/

const mySol2 = (n, r) => {
    const mem = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    const DFS = (n, r) => {
        if (mem[n][r] > 0) return mem[n][r];
        if (n === r || r === 0) {
            return 1;
        } else {
            mem[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
            return DFS(n - 1, r - 1) + DFS(n - 1, r);
        }
    };
    console.log(DFS(n, r));
};
mySol2(n, r);