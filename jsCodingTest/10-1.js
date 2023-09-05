const n = 7;

const mySol = n => {
    let temp = Array.from({length: n + 1}, () => 0);
    //1,2칸 가는방법있음
    temp[1] = 1;
    temp[2] = 2;
    for (let i = 3; i <= n; i++) {
        temp[i] = temp[i - 1] + temp[i - 2];
    }
    console.log(temp[n]);
};

mySol(n);