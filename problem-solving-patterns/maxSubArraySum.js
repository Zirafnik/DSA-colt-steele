//sliding window
//Ex. 7

function maxSubArraySum(arr, num) {
    if(arr.length < num) return null;

    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1],2)); //5