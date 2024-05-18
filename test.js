const lookUp = {
	'(': true,
	'{': true,
	'[': true,
};

const pairUp = {
	')': '(',
	'}': '{',
	']': '[',
};

var isValid = function (s) {
	// string must have even length (divisible by 2) -> if there is remainder => false
	if (s.length % 2) {
		return false;
	}

	let past = []; // keep track of open brackets

	// iterate over string
	for (const char of s) {
		if (lookUp[char]) {
			past.push(char);
		} else {
			const prevNecessary = pairUp[char];

			if (past.pop() !== prevNecessary) {
				return false;
			}
		}
	}


	return P;
};

console.log(isValid('()'));
