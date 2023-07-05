const input = 7;

const sol = n => {
    const DFS = n => {
        if (n > 7) {
            return;
        } else {
            DFS(n * 2)
            DFS(n * 2 + 1)
            console.log(n);
        }
    }
    DFS(1);
}
sol(input);

