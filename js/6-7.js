const n = 'CBA'
const m = 'CBDAGE'

const mySol = (n, m) => {
    let nArr = n.split('');
    let result = 'YES';

    for (const x of m) {
        if(x == nArr[0]){
            nArr.shift();
            if(nArr.length == 0) return result;
        }
    }
    if(nArr.length != 0) result = 'NO'
    return result;
}
console.log(mySol(n, m));