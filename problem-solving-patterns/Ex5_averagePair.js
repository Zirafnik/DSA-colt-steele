// Ex. 5
// Multiple pointers

// Time: O(n)
// Space: O(1)
function averagePair(arr, targetAvg) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const tempAvg = (arr[left] + arr[right]) / 2;

		if (tempAvg === targetAvg) {
			return true;
		}
		if (tempAvg > targetAvg) {
			right--;
		}
		if (tempAvg < targetAvg) {
			left++;
		}
	}

	return false;
}

module.exports = averagePair;
