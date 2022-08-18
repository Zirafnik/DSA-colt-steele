// Ex. 15
// Recursion

// Time: O(n)
// Space: O(n) ???
function reverse(str) {
    if(str.length === 1) return str;

    return str[str.length - 1] + reverse(str.slice(0, -1));
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'