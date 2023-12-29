const fs = require('fs');
const [input] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `July 02, 2007 12:00`
)
    .trim()
    .split("\n");

const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let inputData = input.split(" ");

//월에 따라 분을 반환해주는 함수
const monthMin = (month, year) => {
    let idx = monthArr.indexOf(month);
    let monthDaySum = 0;
    for (let i = 0; i < idx; i++) {
        monthDaySum += monthDay[i];
    }
    if (isYun(Number(year)) && idx > 1) monthDaySum += 1;
    return monthDaySum * 24 * 60;
};

//받은 일과 시, 분으로 분을 반환해주는 함수
const sumMin = (day, hm) => {
    let result = 0;
    result += Number((day.slice(0, -1)) - 1) * 24 * 60;
    let temp = hm.split(':').map(e => Number(e));
    result += Number(temp[0]) * 60;
    result += Number(temp[1]);
    return result;
};

//윤달 판별
const isYun = year => {
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
};

const sol = inputData => {
    let result = monthMin(inputData[0], inputData[2]) + sumMin(inputData[1], inputData[3]);
    let yearMin = 365 * 24 * 60;
    if (isYun(Number(inputData[2]))) yearMin += 24 * 60;
    console.log((result / yearMin) * 100);
};

sol(inputData);