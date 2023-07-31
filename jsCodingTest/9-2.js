const arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
const n = 5;
const m = 9;

const mySol = (arr, n, m) => {
    let cnt = 0;
    const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let check = Array.from({length: n + 1}, () => 0);
    let path = [];

    for (const [a, b] of arr) {
        graph[a][b] = 1;
    }

    const DFS = v => {
        if (v === n) {
            console.log(path);
            cnt++;
        } else {
            for (let i = 1; i <= n; i++) {
                if (graph[v][i] === 1 && check[i] == 0) {
                    check[i] = 1;
                    path.push(i);
                    DFS(i);
                    check[i] = 0;
                    path.pop();
                }
            }
        }
    };
    path.push(1);
    check[1] = 1;
    DFS(1);
    console.log(cnt);
};

mySol(arr, n, m);