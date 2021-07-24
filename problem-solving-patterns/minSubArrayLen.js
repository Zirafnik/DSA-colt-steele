//sliding window
//Ex. 8

function minSubArrayLen(arr, int) {
    let minLength = Infinity;
    let tempLength = 0;
    let left = 0;
    let right = 0;
    let sum = 0;

    while(right <= arr.length) {
        if(sum < int) {
            sum += arr[right];
            right++;
        } else {
            tempLength = right - left;
            minLength = Math.min(minLength, tempLength);
            sum -= arr[left];
            left++;
        }
    }

    return minLength != Infinity ? minLength : 0;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); //2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 62)); //1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)); //0
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)); //5
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)); //3