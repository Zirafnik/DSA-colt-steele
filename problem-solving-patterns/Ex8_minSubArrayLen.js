// Ex. 8
// Sliding window

// Time: O(n)
// Space: O(1)
function minSubArrayLen(arr, int) {
	let left = 0;
	let right = 0;

	let minLength = Infinity;
	let currentSum = arr[right];
	while (right < arr.length) {
		// move pointers & calculate new sum
		if (currentSum < int) {
			right++;
			currentSum += arr[right];
		} else if (currentSum >= int) {
			// get length of sub-array and compare to shortest, then save
			let currentLength = right - left + 1;
			minLength = Math.min(currentLength, minLength);

			// if minLength is one, prematurely end the loop
			if (minLength === 1) return 1;

			// shorten the sub-array further and try again
			currentSum -= arr[left];
			left++;
		}
	}

	return minLength === Infinity ? 0 : minLength;
}

module.exports = minSubArrayLen;
