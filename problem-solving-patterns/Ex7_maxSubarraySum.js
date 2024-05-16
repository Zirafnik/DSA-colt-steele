// Ex. 7
// Sliding window

// Time: O(n)
// Space: O(1)
function maxSubarraySum(arr, num) {
	// if subArray length is longer than arr length return null
	if (num > arr.length) return null;

	// calculate first N numbers sum
	let maxSum = 0;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	// then move from N on by 1, and add the new number while removing the first one
	let tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum += arr[i];
		tempSum -= arr[i - num];

		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
}

module.exports = maxSubarraySum;
