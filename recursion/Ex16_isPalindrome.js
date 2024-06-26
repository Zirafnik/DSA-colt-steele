// Ex. 16
// Recursion

// Time: O(n)
// Space: O(n)?
function isPalindrome(str) {
	if (str.length <= 1) return true;
	if (str[0] !== str[str.length - 1]) return false;

	// return isPalindrome(str.slice(1, str.length-1));
	return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanaspanama')); // false
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
