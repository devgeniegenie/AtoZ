const fs = require('fs');
const [n, a, m, a2] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`
)
    .trim()
    .split("\n");

const arr1 = a.split(' ').map(e => Number(e)).sort((a, b) => a - b);
const arr2 = a2.split(' ').map(e => Number(e));

const mySol = (arr1, arr2) => {
    let result = '';
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                result += 1 + ' ';
            }
        }
        if (result.length == i * 2) result += 0 + ' ';
    }
    console.log(result);
}

// mySol(arr1, arr2)

const mySol2 = (arr1, arr2) => {
    let result = '';
    for (let i = 0; i < arr2.length; i++) {
        let check = binarySearch(arr2[i], arr1);
        if (check) {
            result += 1 + ' ';
        } else {
            result += 0 + ' ';
        }
    }
    console.log(result);
}

const binarySearch = (n, arr) => {
    let p = 0, q = arr.length - 1;
    while (p <= q) {
        let x = Math.floor((p + q) / 2);
        if (n == arr[x]) {
            return true
        } else if (n > arr[x]) {
            p = x + 1;
        } else if (n < arr[x]) {
            q = x - 1;
        }
    }
    return false;
};

mySol2(arr1, arr2)