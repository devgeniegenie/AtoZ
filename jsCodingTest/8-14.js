const n = 4;
const m = 2;

const mySol = (n, m) => {
    let temp = [];
    let result = [];
    const DFS = (L, s) => {
        if (L === m) {
            result.push(temp.slice());
        } else {
            for (let i = s; i <= n; i++) {
                temp[L] = i;
                DFS(L + 1, i + 1);
            }
        }
    };
    DFS(0, 1)
    console.log(result);
}
mySol(n, m);