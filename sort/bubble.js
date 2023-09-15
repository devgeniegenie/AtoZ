const input = [6, 3, 2, 7, 5, 9, 1];

const bubble = arr => {
    let length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1; j++) {
            let temp;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
};
bubble(input);