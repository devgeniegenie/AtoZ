const input = [6, 3, 2, 7, 5, 9, 1];

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
 * 1. 이중 선택 정렬: 한 번의 탐색에서 최솟값과 최댓값을 같이 찾는 방법이다. 탐색 횟수가 절반으로 줄어들게 된다.
 * 2. 탐색을 응용하여 개선: 한 번의 탐색 때 동일한 값이 있다면 함께 정렬하는 방법이다.
 *  즉, 만약 최솟값을 찾았는데 그 값과 같은 값이 있다면 다음 번 탐색 때 최솟값으로 탐색될 것이기에 이 값도 탐색된 것으로 보고 미리 정렬한다. 같은 값이 많을수록 유용하게 된다.
 */