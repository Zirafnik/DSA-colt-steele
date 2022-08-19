// Ex. 19
// Recursion

// Time: O(n)
// Space: O(n) ?
function capitalizeFirst(arr) {
    if(!arr.length) return [];

    const string = arr[0];
    const capitalized = string[0].toUpperCase() + string.slice(1);
    
    return [capitalized].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']