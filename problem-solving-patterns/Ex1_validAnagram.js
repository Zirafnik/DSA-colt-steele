//frequency counter
//Ex. 1

// Time: O(3n) => O(n)
// Space: O(2) => O(1)
function validAnagram1(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	const str1Counters = {};
	const str2Counters = {};

	for (let char of str1) {
		str1Counters[char] = str1Counters[char]
			? ++str1Counters[char]
			: 1;
	}

	for (let char of str2) {
		str2Counters[char] = str2Counters[char]
			? ++str2Counters[char]
			: 1;
	}

	for (let key in str1Counters) {
		if (!str2Counters[key]) return false;
		if (str1Counters[key] !== str2Counters[key]) return false;
	}

	return true;
}

// Time: O(2n) => O(n)
// Space: O(1)
function validAnagram2(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	const freqCounters = {};

	for (let char of str1) {
		freqCounters[char] = freqCounters[char]
			? ++freqCounters[char]
			: 1;
	}

	for (let char of str2) {
		// if can't find letter (undefined), or value equal to zero
		if (!freqCounters[char]) {
			return false;
		}

		freqCounters[char]--;
	}

	return true;
}

// console.log(validAnagram('', '') == true);
// console.log(validAnagram('aaz', 'zza') == false);
// console.log(validAnagram('anagram', 'nagaram') == true);
// console.log(validAnagram('rat', 'car') == false);
// console.log(validAnagram('awesome', 'awesom') == false);
// console.log(validAnagram('qwerty', 'qeywrt') == true);
// console.log(validAnagram('texttwisttime', 'timetwisttext') == true);

module.exports = {
	validAnagram1,
	validAnagram2,
};
