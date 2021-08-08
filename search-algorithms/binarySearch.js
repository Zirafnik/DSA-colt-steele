function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = Math.round((left + right) / 2);

        if(arr[mid] === val) {
            return mid;
        }
        if(arr[mid] < val) {
            left = mid;
        }
        if(arr[mid] > val) {
            right = mid;
        }
    }
    return -1;
}


//console.log(binarySearch([1,2,3,4,5,6,7,8,9,20], 9));
console.log('Result:', binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95));
//console.log(binarySearch([1,2,3,4,5], 6));