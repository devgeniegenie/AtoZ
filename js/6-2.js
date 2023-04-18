const input = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

const mySol = (input) => {
    let cnt = 0;
    let result = '';
    for (const x of input) {
        if (x == '(') {
            cnt++;
        } else if (x == ')') {
            cnt--;
        }
        if (cnt == 0 && x != ')') result += x;
    }
    console.log(result);
}
mySol(input);

const sol = (input) => {
    let result = '';
    let stack = [];
    for (const x of input) {
        if (x === ')') {
            while(stack.pop() !== '(');
        } else {
            stack.push(x);
        }
    }
    result = stack.join('');
    console.log(result);
}
sol(input);