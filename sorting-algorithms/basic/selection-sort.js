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

    while (index < arr.length) {
        for(let j = index; j < arr.length; j++) {
            let currentMin = Math.min(min, arr[j]);

            if(min !== currentMin) {
                min = currentMin;
                minIndex = j;
            }
        }
        //so we dont swap same indices
        if(index !== minIndex) {
            swap(arr, index, minIndex);  //could also do arr.indexOf(min) for the second arg here, but indexOf has to iterate through array again, and we avoid looking for the index with the above 'if' statement in 'for' loop
        }
        min = Infinity;
        index++;
    }

    return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));
console.log(selectionSort([5, 4, 3, 2, 1]));