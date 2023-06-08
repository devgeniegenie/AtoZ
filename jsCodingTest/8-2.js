const input = 6;

const sol = n => {
    let result = '';
    const binary = n => {
        if (n == 0) {
            return;
        }else{
            binary(parseInt(n / 2));
            result += n % 2;
        }
    };
    binary(n);
    console.log(result);
}
sol(input)