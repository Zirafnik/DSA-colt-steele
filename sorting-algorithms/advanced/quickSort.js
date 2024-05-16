// Quick sort
// Time:
// Space:
function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		const pivotIdx = pivot(arr, left, right);

		// left
		quickSort(arr, left, pivotIdx - 1);

		// right
		quickSort(arr, pivotIdx + 1, right);
	}

	return arr;
}

// Time: O(n)
// Space: O(1)
function pivot(arr, start, end) {
	let pivotIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (arr[start] > arr[i]) {
			pivotIdx += 1;
			swap(arr, pivotIdx, i);
		}
	}

	swap(arr, start, pivotIdx);

	return pivotIdx;
}

function swap(arr, idx1, idx2) {
	const temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}

console.log(pivot([28, 41, 4, 11, 16, 1, 40, 14, 36, 36, 37, 42, 18], 0, 12));
console.log(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 36, 37, 42, 18]));
