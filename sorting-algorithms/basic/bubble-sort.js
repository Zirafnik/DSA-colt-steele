// Bubble sort

function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// Time: O(n^2) -> (if data nearly sorted then O(2n), as it passes once to change + once to check)
// Space:
function bubbleSort(arr) {
    for(let j = arr.length; j > 0; j--) {
        let sorted = true;

        for(let i = 0; i < j - 1; i++) {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
                sorted = false;
            }
        }

        if(sorted) break;
    }
    return arr;
}

function bubbleSort2(arr) {
    let counter = 0;

    while(counter < arr.length) {
        let isSorted = true;

        for(let i = 0; i < arr.length - counter - 1; i++) {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
                isSorted = false;
            }
        }

        if(isSorted) break;
        counter++;
    }
    return arr;
}


console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([23,4,52,1,3,5,23,5,224,3,1,42,45,24,32,254,53,23,1,3224,42,4,2,3433,13,24343,53,2,3,2]));

console.log(bubbleSort2([37, 45, 29, 8]));
console.log(bubbleSort2([23,4,52,1,3,5,23,5,224,3,1,42,45,24,32,254,53,23,1,3224,42,4,2,3433,13,24343,53,2,3,2]));