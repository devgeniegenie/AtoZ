const input = 'ksekkset';
let set = new Set(input.split(''));
console.log([...set].join(''));


const input2 = ['good', 'time', 'good', 'time', 'student'];
let set2 = new Set(input2);
console.log([...set2]);


const input3 = [7, 3, 9, 5, 6, 12];
let result = [input3[0]];
for (let i = 1; i < input3.length; i++) {
    if (input3[i] > input3[i - 1]) {
        result.push(input3[i]);
    }
}
console.log(result);


const input4 = '130 135 148 140 145 150 150 153'.split(' ').map(el => Number(el));
let max = input4[0];
let result2 = 1;
for (let i = 1; i < input4.length; i++) {
    if (input4[i] > max) {
        max = input4[i];
        result2++
    }
}
console.log(result2);


const input5 = `1 0 1 1 1 0 0 1 1 0`.split(' ').map(el => Number(el));
let point = 1;
let result3 = 0;
for (const x of input5) {
    if (x == 1) {
        result3 += point;
        point++;
    } else {
        point = 1;
    }
}
console.log(result3);


const arr = `87 89 92 100 76`.split(' ').map(el => Number(el));

function mySolution(arr) {
    let n = arr.length;
    let answer = Array.from({length: n}, () => 1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[i]) answer[i]++;
        }
    }
    return answer;
}

console.log(mySolution(arr))


const input6 = [[10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]];
function solution(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let sum1 = 0;
        let sum2 = 0;
        for (let j = 0; j < i; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        max = Math.max(max, sum1, sum2);
    }
    let sum3 = 0;
    let sum4 = 0;
    for(let i = 0; i < n; i++) {
        sum3 += arr[i][i];
        sum4 += arr[i][n - i - 1];
    }
    return Math.max(max, sum3, sum4);
}
console.log(solution(input6))

