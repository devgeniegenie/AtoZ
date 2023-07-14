const n = 3;
const m = 2;

const mySol = (n, m) => {
    let arr = [];
    let temp = Array.from({length: m}, () => 0);
    const DFS = (L) => {
        if (L == m) {
            arr.push(temp.slice());
            console.log(temp);
        } else {
            for(let i = 1; i <= n; i++) {
                temp[L] = i;
                DFS(L + 1);
            }
        }
    };
    DFS(0);
};
mySol(n, m);