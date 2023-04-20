const input1 = '()(((()())(())()))(())'
const input2 = '(((()(()()))(())()))(()())';

const mySol = input => {
    let result = 0;
    let stack = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == '(') {
            stack.push('(');
        } else {
            stack.pop();
            if(input[i-1] == '(') {
                result += stack.length;
            } else {
                result++;
            }
        }
    }
    console.log(result)
}
mySol(input1);
mySol(input2);