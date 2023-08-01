const arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
const n = 5;
const m = 9;

const mySol = (arr, n, m) => {
    let result = 0;
    let graph = Array.from({length: n + 1}, () => []);
    let check = Array.from({length: n + 1}, () => 0);
    let path = [];
    for (let [a, b] of arr) {
        graph[a].push(b);
    }

    const DFS = (v) => {
        if (v === n) {
            result++;
            console.log(path);
        } else {
            for (const x of graph[v]) {
                if (check[x] === 0) {
                    path.push(x);
                    check[x] = 1;
                    DFS(x);
                    path.pop()
                    check[x] = 0;
                }
            }
        }
    }
    console.log(graph);
    path.push(1);
    check[1] = 1;
    DFS(1);
}

mySol(arr, n, m);