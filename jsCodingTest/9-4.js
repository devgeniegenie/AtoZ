const arr = [[0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0]];

const mySol = arr => {
    let result = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    const DFS = (x, y) => {
        if (x === arr.length - 1 && y === arr[0].length - 1) {
            result++;
        } else {
            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                if (nx >= 0 && nx <= (arr.length - 1) && ny >= 0 && ny <= (arr[0].length - 1) && arr[nx][ny] === 0) {
                    arr[nx][ny] = 1;
                    DFS(nx, ny);
                    arr[nx][ny] = 0;
                }
            }
        }
    };
    arr[0][0] = 1
    DFS(0, 0);
    console.log(result);
};
mySol(arr);