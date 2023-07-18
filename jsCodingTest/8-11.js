const input = 5;

const mySol = n => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log(result);
}
mySol(input);

const mySol2 = n => {
    const DFS = n => {
        if (n === 1) {
            return 1;
        } else {
            return DFS(n-1) * n;
        }
    }
    console.log(DFS(n));
}
mySol2(input);