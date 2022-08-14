// Time complexity: log(n)
// Space complexity: 

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.round((left + right) / 2);
        
        if(arr[mid] === val) {
            return mid;
        }
        if(arr[mid] < val) {
            left = mid + 1;
        }
        if(arr[mid] > val) {
            right = mid - 1;
        }
    }
    return -1;
}
module.exports = binarySearch;