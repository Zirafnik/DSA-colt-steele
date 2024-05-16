// Ex. 2
// multiple pointers? -> Solved it by using frequency.

// Time: O(n)
// Space: O(1)

function countUniqueValues(arr) {
	let count = 0;
	let prevNum;

	for (let i = 0; i < arr.length; i++) {
		// skip same numbers
		if (arr[i] === prevNum) continue;

		prevNum = arr[i];
		count++;
	}

	return count;
}

module.exports = countUniqueValues;
