// Ex. 22
// Recursion

// Time: O(n^2)
// Space: O(n)
function stringifyNumbers(obj) {
    let copy = {...obj};

    for(const key of Object.keys(copy)) {
        if(typeof copy[key] === 'number') {
            copy[key] = copy[key].toString();
        } else if(typeof copy[key] === 'object' && !Array.isArray(copy[key])) {
            copy[key] = stringifyNumbers(copy[key]);
        }
    }

    return copy;
}

const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
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