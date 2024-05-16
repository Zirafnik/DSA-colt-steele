// Ex. 12
// Recursion

// Time: O(n)
// Space: O(1)
function productOfArray(arr) {
	if (arr.length === 0) return 1;

	let last = arr.pop();

	return last * productOfArray(arr);
}

// Solution with slice of the first element -> it also does not mutate the array
// Time: O(n^2) ???
// Space: O(1)
function productOfArray(arr) {
	if (arr.length <= 0) {
		return 1;
	}

	return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
