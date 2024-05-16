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

// Multiple pointers solution (old solution I gave in course online)
// Time: O(n)
// Space: O(1)
function countUniqueValues2(arr) {
	let i = 0;
	let j = 1;

	if (arr.length === 0) {
		return 0;
	}

	while (j < arr.length) {
		if (arr[i] !== arr[j]) {
			let char = arr[j];

			arr.splice(j, 1);
			i++;
			arr.splice(i, 0, char);
		}

		j++;
	}

	return i + 1;
}

module.exports = countUniqueValues;
