// Insertion sort
// Time: O(n^2)
// Best time: O(n) -> for nearly sorted data
// Space: O(1)
// "online algorithm": Can be used with live data -> constantly feeding new numbers at the end of array, get sorted
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		let j;

		for (j = i - 1; j >= 0; j--) {
			// Make room, by pushing bigger values to the right
			if (currentVal < arr[j]) {
				arr[j + 1] = arr[j];
				// Once we hit a smaller value, stop and insert one above (previous value, was already copied to the right)
			} else {
				break;
			}
		}

		arr[j + 1] = currentVal;
	}
	return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2]));
