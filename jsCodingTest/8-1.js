const input = 5;

const sol = n => {
    if (n == 0) {
        return;
    } else {
        sol(n - 1);
        console.log(n);
    }
}
sol(input);