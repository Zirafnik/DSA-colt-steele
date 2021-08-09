function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function bubbleSort(arr) {
    for(let j = arr.length; j > 0; j--) {
        for(let i = 0; i < j - 1; i++) {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
            }
        }
    }
    return arr;
}


//console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([23,4,52,1,3,5,23,5,224,3,1,42,45,24,32,254,53,23,1,3224,42,4,2,3433,13,24343,53,2,3,2]));