const n = 5;
const r = 3;

const mySol = (n, r) => {
    const DFS = (n, r) => {
        if (n === r || r === 0) {
            return 1;
        } else {
            return DFS(n - 1, r - 1) + DFS(n - 1, r);
        }
    }
    console.log(DFS(n, r));
}

mySol(n, r);