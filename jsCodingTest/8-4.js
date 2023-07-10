const input = 3;

const mySol = input => {
    let ch = Array.from({lenth: input + 1}, () => 0);
    const DFS = (n) => {
        if (n > input) {
            let result = [];
            for (let i = 1; i < n; i++) {
                if (ch[i] === 1) result.push(i);
            }
            console.log(result);
        } else {
            ch[n] = 1;
            DFS(n + 1);
            ch[n] = 0;
            DFS(n + 1);
        }
    };
    DFS(1);
};
mySol(input);