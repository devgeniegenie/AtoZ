const inputN = 8;
const inputK = 3;

const mySol = (N, K) => {
    let arr = Array.from({length: N}, (v, i) => i + 1);
    let idx = K - 1;
    while (arr.length != 1) {
        arr.splice(idx,1)
        if(idx >= arr.length){
            idx -= arr.length;
        } else {
            idx += K - 1;
        }
        console.log(arr)
    }
}

const mySol2 = (n, k) => {
    let arr = Array.from({length: N}, (v, i) => i + 1);
    let queue = [];
    while (arr.length) {
        
    }
}

mySol(inputN, inputK);