const board = [[0, 0, 0, 0, 0],
               [0, 0, 1, 0, 3],
               [0, 2, 5, 0, 1],
               [ 4, 2, 4, 4, 2],
               [3, 5, 1, 3, 1]]
const move = [1, 5, 3, 5, 1, 2, 1, 4];

const mySol = (board, move) => {
    let result = [];
    for (const sel of move) {
        for (let x = 0; x < board.length; x++) {
            if (board[x][sel - 1] != 0) {
                if(result[result.length-1] != board[x][sel - 1]) {
                    result.push(board[x][sel - 1]);
                    board[x][sel - 1] = 0;
                } else{
                    result.pop()
                }
                break;
            }
        }
    }
    console.log(result.length);
}

mySol(board, move);