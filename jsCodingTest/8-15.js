const n = 5;
const k = 3;
const arr = [2, 4, 5, 8, 12];
const m = 6;

const mySol = (n, k, arr, m) => {
    let cnt = 0;
    const DFS = (L, s, sum) => {
        if (L === k) {
            if (sum % m == 0) {
                cnt++;
            }
        } else {
            for (let i = s; i < n; i++) {
                DFS(L + 1, i + 1, sum + arr[i]);
            }
        }
    };
    DFS(0, 0, 0);
    console.log(cnt);
};

mySol(n, k, arr, m);