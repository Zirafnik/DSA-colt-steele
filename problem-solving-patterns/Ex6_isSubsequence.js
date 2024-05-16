// Ex. 6
// Multiple pointers

// Time: O(n)
// Space: O(1)
function isSubsequence(substr, str) {
	let substrIndex = 0;

	if (!substr) return true;

	for (let char of str) {
		if (substr[substrIndex] === char) {
			substrIndex++;
		}
		if (substrIndex === substr.length) {
			return true;
		}
	}

	return false;
}

// Recursive solution
// Time: ??? O(n) ?
// Space: NOT O(1) ???
function isSubsequence(str1, str2) {
	if (str1.length === 0) return true;
	if (str2.length === 0) return false;
	if (str2[0] === str1[0])
		return isSubsequence(str1.slice(1), str2.slice(1));
	return isSubsequence(str1, str2.slice(1));
}

module.exports = isSubsequence;
