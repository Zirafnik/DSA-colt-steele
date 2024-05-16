// Ex. 17
// Recursion
const isOdd = (val) => val % 2 !== 0;

// Time: O(n)
// Space: O(n) ?
// modifies original passed in array because of pop -> use slice to make shallow copies
function someRecursive(arr, cb) {
	if (arr.length === 0) return false;
	// if(cb(arr[0])) return true;
	if (cb(arr.pop())) return true;

	return someRecursive(arr, cb);
	// return someRecursive(arr.slice(1), cb);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
