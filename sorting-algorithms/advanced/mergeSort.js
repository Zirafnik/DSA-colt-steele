// Merge sort
// Time: O(n*logn)
// Space: O(n)
function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    const midIdx = Math.floor(arr.length / 2);
    const arr1 = arr.slice(0, midIdx);
    const arr2 = arr.slice(midIdx);

    return merge(mergeSort(arr1), mergeSort(arr2));
}

// Time: O(n+m)
// Space: O(n+m)
function merge(arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0; 

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    if(i === arr1.length) {
        mergedArr = mergedArr.concat(arr2.slice(j));
    } else {
        mergedArr = mergedArr.concat(arr1.slice(i));
    }

    return mergedArr;
}

console.log(merge([2, 3, 5, 7], [2, 6, 8, 9]));
console.log(mergeSort([2, 5, 1, 6, 6, 8, 2, 3, 5, 2, 4, 3, 9, 0]));