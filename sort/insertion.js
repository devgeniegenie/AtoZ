const input = [10, 6, 3, 2, 7, 5, 9, 1];

const insertion = arr => {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp
    }
    console.log(arr);
};
insertion(input);

