const n = 3;
const coins = [1, 2, 5];
const goal = 15;

const mySol = (n, coins, goal) => {
    let result = Number.MAX_SAFE_INTEGER;

    const DFS = (L, sum) => {
        if (sum > goal || L >= result) {
            return;
        }
        if (sum === goal) {
            result = Math.min(result, L);
            return;
        }
        for (let i = 0; i < coins.length; i++) {
            DFS(L + 1, sum + coins[i])
        }
    };
    DFS(0, 0);
    console.log(result);
};

mySol(n, coins, goal);