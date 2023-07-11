const limit = 259
const n = 5
const arr = [81, 58, 42, 33, 61]

const mySol = (limit, n, arr) => {
    let answer = Number.MIN_SAFE_INTEGER;
    const DFS = (L, sum) => {
        if (limit < sum) {
            return;
        }
        if (L === n) {
            answer = Math.max(answer, sum);
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum)
        }
    }
    DFS(0, 0)
    console.log(answer);
};

mySol(limit, n, arr);
