const n = 6;
const arr = [1, 3, 5, 6, 7, 10];

const mySol = (n, arr) => {
    let result = "NO";
    let ch = Array.from({length: n + 1}, () => 0);
    const DFS = n => {
        if (n == 6) {
            ch.slice(1, n);
            let sum1 = 0;
            let sum2 = 0;

            for (let i = 0; i < n; i++) {
                if (ch[i + 1] === 0) sum1 += arr[i];
                else sum2 += arr[i];
            }

            if (sum1 == sum2) result = "YES";
        } else {
            if (result === "YES") return;
            ch[n] = 1;
            DFS(n + 1);
            ch[n] = 0;
            DFS(n + 1);
        }
    };
    DFS(1);
    console.log(result);
}

const mySol2 = (n, arr) => {
};