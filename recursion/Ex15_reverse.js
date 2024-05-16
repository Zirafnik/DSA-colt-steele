// Ex. 15
// Recursion

// Time: O(n)
// Space: O(n) ???
function reverse(str) {
	if (str.length === 1) return str;

	// remove from end, add to begining
	return str[str.length - 1] + reverse(str.slice(0, -1));
}

// Colt's solution: removes from begining and adds to end
function reverse2(str) {
	if (str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
