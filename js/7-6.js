const n = 9
const arr = `120 125 152 130 135 135 143 127 160`.split(' ').map(e => Number(e));

const mySol = (n, arr) => {
    let originArr = [...arr]; //arr.slice()
    let result = [];
    const sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if(originArr[i] !== sortedArr[i]) result.push(i + 1);
    }
    console.log(result);
}

mySol(n, arr);