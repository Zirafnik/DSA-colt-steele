//sliding windows
//Ex. 9

function findLongestSubstring(str) {
    let maxLength = 0;
    let tempLength = 0;
    let freq = {};
    let left = 0;
    let right = 0;

    while(right < str.length) {
        if(!freq[str[right]]) {
            freq[str[right]] = 1;
            right++;
        } else {
            freq[str[left]] = 0;
            left++
        }
        tempLength = right - left;
        maxLength = Math.max(maxLength, tempLength);
    }
    return maxLength;
}

console.log(findLongestSubstring('rithmschool')); //7
console.log(findLongestSubstring('bbbbbbb')); //1
console.log(findLongestSubstring('thecatinthehat')); //7
console.log(findLongestSubstring('')); //0
console.log(findLongestSubstring('longestsubstring')); //8
console.log(findLongestSubstring('thisishowwedoit')); //6