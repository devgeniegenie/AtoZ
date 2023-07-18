const n = 3;
const m = 2;
const arr = [3, 6, 9];

const mySol = (n, m, arr) => {
    const result = [];
    const temp = Array.from({length: m}, () => 0);
    const check = Array.from({length: n}, () => 0);
    const DFS = (L) => {
        if (L == m) {
            result.push(temp.slice());
            console.log(result);
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (check[i] == 0) {
                    check[i] = 1;
                    temp[i] = arr[i];
                    DFS(L + 1);
                    check[i] = 0;
                }
            }
        }
    };
    DFS(0);
};
mySol(n, m, arr);