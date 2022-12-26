function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        for(let j = 1; j <= i; j++) {
            console.log(arr[i - j], arr[i]);
            if(i === j) {
                console.log('swap');
                swap(arr, i - j + 1, i);
            } else if(arr[i - j] > arr[i]) {
                continue;
            }
        }
    }
    return arr;
}


function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

console.log(insertionSort([5, 3, 4, 1, 2]));