const input = [10, 6, 3, 2, 7, 5, 9, 1];

/**
 * wiki
 * 주어진 리스트 중에 최소값을 찾는다.
 * 그 값을 맨 앞에 위치한 값과 교체한다(패스(pass)).
 * 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.
 */

const selection = arr => {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log(arr);
};

selection(input);

/**
 * 개선방법
 * 이중 선택 정렬: 한 번의 탐색에서 최솟값과 최댓값을 같이 찾는 방법이다. 탐색 횟수가 절반으로 줄어들게 된다.
 */

const selection2 = arr => {
    const length = arr.length;

    for(let i = 0; i < Math.floor(length / 2); i++) {
        let max = i, min = i;
        for(let j = i +1; j < length - i; j++) {
            if(arr[max] < arr[j]) {
                max = j;
            }
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        /*const tempMin = arr[i];
        arr[i] = arr[min];
        arr[min] = tempMin;*/

        /*const tempMax = arr[length - i - 1];
        arr[length - i - 1] = arr[max];
        arr[max] = tempMax;*/
        // [arr[length - i - 1], arr[max]] = [arr[max], arr[length - i - 1]]

        [arr[i], arr[min]] = [arr[min], arr[i]]; //구조분해할당
        [arr[length - i - 1], arr[max]] = [arr[max], arr[length - i - 1]];
    }

    console.log(arr);
};

selection2(input);