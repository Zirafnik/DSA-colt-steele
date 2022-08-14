// Ex. 3
// Frequency counter

// Time: O(n)
// Space: O(n)

function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();

    if(num1.length !== num2.length) return false;

    const freq = {};

    for(let char of num1) {
        freq[char] = freq[char] ? ++freq[char] : 1;
    }

    for(let char of num2) {
        if(!freq[char]) return false;
        freq[char]--;
    }

    return true;
}

module.exports = sameFrequency;