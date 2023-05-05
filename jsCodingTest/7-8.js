let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let n = 5;

let arr2 = [[3, 3], [1, 3], [2, 3]];
n2 = 3

const mySol = (arr, n) => {
    let result = 0;
    arr.sort((a, b) => {
        if (a[1] == b[1]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1]
        }
    })
    let chk = 0;
    for (const x of arr) {
        if (chk <= x[0]) {
            chk = x[1]
            result++
        }
    }
    console.log(arr)
    console.log(result)
}

mySol(arr, n);
mySol(arr2, n2);