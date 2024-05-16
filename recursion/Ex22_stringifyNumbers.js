// Ex. 22
// Recursion

// Time: O(n^2)
// Space: O(n)
function stringifyNumbers(obj) {
	let copy = { ...obj };

	for (const key of Object.keys(copy)) {
		if (typeof copy[key] === 'number') {
			copy[key] = copy[key].toString();
		} else if (
			typeof copy[key] === 'object' &&
			!Array.isArray(copy[key])
		) {
			copy[key] = stringifyNumbers(copy[key]);
		}
	}

	return copy;
}

// I copy the whole initial object, and only change the 'number' propreties, otherwise I leave them the same
// While Colt's solution copies all the propreties from the initial object to a new empty one
function stringifyNumbers2(obj) {
	var newObj = {};
	for (var key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString();
		} else if (
			typeof obj[key] === 'object' &&
			!Array.isArray(obj[key])
		) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

const obj = {
	num: 1,
	test: [],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66,
		},
	},
};
console.log(stringifyNumbers(obj));
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
