const arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
const n = 5;

const mySol = (n, arr) => {
    let max = Math.max(...arr.map(e => e[1]))
    let checkArr = Array.from({length: max}, () => 0)
    for (let i = 0; i < n; i++) {
        let start = arr[i][0];
        let end = arr[i][1];
        for (let j = start - 1; j < end - 1; j++) {
            checkArr[j] += 1;
        }
    }
    console.log(Math.max(...checkArr))
};
mySol(n, arr);

const sol = arr => {
    let result = 0;
    let time = [];
    for (const x of arr) {
        time.push([x[0], 's']);
        time.push([x[1], 'e'])
    }
    time.sort((a, b) => {
        if(a[0] == b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
        else return a[0] - b[0];
    });
    let cnt = 0;
    for (const x of time) {
        if(x[1] == 's') cnt++;
        else cnt --;
        result = Math.max(result, cnt)
    }
    console.log(result)
}
sol(arr)