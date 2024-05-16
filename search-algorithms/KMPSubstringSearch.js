// KMP(Knuth–Morris–Pratt) substring search

// Time: O(n+m) => O(n) (when m < n) https://cs.stackexchange.com/questions/139307/time-complexity-omn-vs-on
// Space: O(m)
function KMPSubstringSearch(string, pattern) {
	// Build reference table
	// Time: O(m)
	// Space: O(m)
	const refTable = [0];
	let i = 0;
	let j = 1;
	while (j < pattern.length) {
		if (pattern[i] === pattern[j]) {
			refTable.push(i + 1);
			i++;
			j++;
			// if there is a mismatch:
		} else {
			i = refTable[i - 1];

			// if i was already 0, refTable[i - 1] will return undefined;
			if (i === undefined) {
				refTable.push(0);
				i = 0;
				j++;
			}
		}
	}

	console.log(refTable);
}

// console.log(KMPSubstringSearch('wowomgomgwowomg', 'omg')); //3
// console.log(KMPSubstringSearch('aaaaaaa', 'aaaaa')); //3
console.log(KMPSubstringSearch('adsgwadsxdsgwadsg', 'dsgwadsgz')); // refTable = [0, 0, 0, 0, 0, 1, 2, 3, 0]
console.log(KMPSubstringSearch('asvadffsd', 'abcdabca')); // refTable = [0, 0, 0, 0, 1, 2, 3, 1]
console.log(KMPSubstringSearch('asvadffsd', 'aabaabaaa')); // refTable = [0, 1, 0, 1, 2, 3, 4, 5, 2]
