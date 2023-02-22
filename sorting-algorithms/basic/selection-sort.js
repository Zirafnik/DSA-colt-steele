function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// Selection sort
// Time: O(n^2)
// Space: O(1)
// more efficient in swapping (swaps only at the end if need be) -> if we have to minimize writing to disk or something
function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }

        if(minIdx !== i) swap(arr, i, minIdx);
    }

    return arr;
}

function selectionSortOld(arr) {
    let index = 0;
    let min = Infinity;
    let minIndex = 0;

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] > minVal) {
                minVal = arr[j];
                minIdx = j;
            }
        }
        
        swap(arr, i, minIdx);
    }

    return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));
console.log(selectionSort([5, 4, 3, 2, 1]));
