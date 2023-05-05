// let arr = [23, 87, 65, 12, 57, 32, 99, 81, 1];
var arr = [];
for (let i = 1; i <= 240000; i++) {
    arr.push(i);
}
let target = 1200;

//logN 서치 안됨(이진검색 구현 안됨) > 구현 잘못됨
/*const mySol = (arr, target) => {
    let result;
    let resultIdx;
    arr.sort((a, b) => a - b);
    let idx = arr.length - 1;
    while (true) {
        if (target == arr[idx]) {
            result = idx
        } else if (target > arr[idx]) {
            idx = parseInt((arr.length - 1 + idx + 1) / 2);
        } else {
            idx = parseInt((idx + 1) / 2);
        }
        if (arr[result] == arr[idx]) {
            resultIdx = idx;
            break;
        }
    }
    console.log(result + 1)
}
mySol(arr, target);*/

const sol = (arr, target) => {
    let cnt = 0;
    arr.sort((a, b) => a - b);
    let lt = 0, rt = arr.length - 1;
    while (lt <= rt) {
        let mid = parseInt((rt + lt) / 2);
        if (target == arr[mid]) {
            break
        } else if (target > arr[mid]) {
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
        cnt ++;
        console.log(`${cnt}. low: ${lt}, mid: ${mid}, high: ${rt}, data: ${arr[mid]}`);
    }
    console.log(cnt);
};
sol(arr, target)