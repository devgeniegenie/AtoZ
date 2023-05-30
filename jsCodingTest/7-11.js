const len = 9;
const n = 3;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sol = (len, n, arr) => {
    let answer;
    let lt = Math.max(...arr);
    let rt = lt + arr.reduce((acc, el) => acc + el, 0);
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (check(mid, arr)) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1
        }
    }
    console.log(answer);
}

const check = (mid, arr) => {
    let cnt = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] > mid) {
            sum = arr[i];
            cnt++;
        } else {
            sum += arr[i];
        }
    }
    return cnt <= n;
}

sol(len, n, arr);