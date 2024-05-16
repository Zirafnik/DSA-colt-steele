// Ex. 10
// Recursion

// Time: O(n)
// Space: O(1)

function power(base, exponent) {
	if (exponent === 0) return 1;

	return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
