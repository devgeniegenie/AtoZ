const input = "(()(()))(()";
let stack = [];
try{
    for (const x of input) {
        if (x === "(") {
            stack.push(x);
        } else if (x === ")") {
            stack.pop(x);
        }
    }
    console.log("YES")
} catch (e) {
    console.log("NO")
}
