const n = 7

const mySol = n => {
    let answer = "";
    let queue = [];
    queue.push(1);
    while (queue.length) {
        console.log(queue);
        let v = queue.shift();
        answer += v + " ";
        for (let nv of [v * 2, v * 2 + 1]) {
            if (nv > n) continue;
            queue.push(nv);
        }
    }
    console.log(answer);
}
mySol(n);