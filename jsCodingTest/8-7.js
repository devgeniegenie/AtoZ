const n = 5;
const limit = 20;
let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4];

const mySol = (n, limit, ps, pt) => {
    let max = Number.MIN_SAFE_INTEGER;
    const DFS = (L, sum, time) => {
        if (time > limit) {
            return
        }
        if (L === n) {
            if (sum > max) {
                max = sum;
            }
        } else {
            DFS(L + 1, sum + ps[L], time + pt[L])
            DFS(L + 1, sum, time)
        }
    }
    DFS(0, 0, 0);
    console.log(max);
}

mySol(n, limit, ps, pt);