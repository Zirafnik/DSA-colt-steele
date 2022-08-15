// Ex. 4

// Frequency counter
// Time: O(n)
// Space: O(n)
function areThereDuplicates1(...args) {
    const freq = {};

    for(let arg of args) {
        if(freq[arg]) return true;

        freq[arg] = true;
    }

    return false;
}

// Multiple pointers?
// Time: O(n log(n))
// Space: O(1)
function areThereDuplicates2(...args) {
    // sort the list first -> time: n log(n)
    args.sort();

    let prev;

    for(let item of args) {
        if(prev === item) return true;
        prev = item;
    }

    return false;
}

// One-liner solution using Set
function areThereDuplicates3(...arguments) {
    return new Set(arguments).size !== arguments.length;
}

module.exports = {
    areThereDuplicates1,
    areThereDuplicates2,
};