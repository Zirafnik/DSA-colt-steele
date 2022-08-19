// Ex. 21
// Recursion

// Time: O(n)
// Space: O(n)
function capitalizeWords(arr) {
    if(!arr.length) return [];

    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

// With destructuring from comments (I believe destructuring is slower though?)
function capitalizeWords2(arr) {
    return arr.length < 1? [] : [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))]
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])); // ['I', 'AM', 'LEARNING', 'RECURSION']