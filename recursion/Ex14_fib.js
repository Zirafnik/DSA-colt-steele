// Ex. 14
// Recursion

// Time: O(2^n)
// Space: O(n)
function fib(num) {
	// if num 0 or less
	if (num <= 0) return 0;
	// if num 1 or 2
	if (num <= 2) return 1;

	// We sum two neighbouring indexes together (since the sum of the adjacent numbers gives us the next one)
	// 1. we decrement the neighbouring indexes (begins with 1), until we hit index 1 or 2, which we know both have value of 1
	// 2. we then sum from there up to gain bigger index corresponding values
	return fib(num - 1) + fib(num - 2);
}

console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
