// Ex. 9
// Sliding window + frequency

// Time: O(n)
// Space: O(1)
function findLongestSubstring(str) {
    let left = 0;
    let right = 0;

    const encounteredChars = {};

    let maxUniqueChars = 0;
    let currentLength = 0;
    while(right < str.length) {
        if(!encounteredChars[str[right]]) {
            encounteredChars[str[right]] = true;
            currentLength++;
            maxUniqueChars = Math.max(currentLength, maxUniqueChars);
            right++;
        } else {
            // shorten current length
            currentLength--;

            // reset encountered char
            encounteredChars[str[left]] = false;

            // move left pointer by 1
            left++;
        }
    }

    return maxUniqueChars;
}

// Similar solution, but a little less optimal and a bit more readable (my old one)
function findLongestSubstring2(str) {
    let maxLength = 0;
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
        const tempLength = right - left;
        maxLength = Math.max(maxLength, tempLength);
    }
    return maxLength;
}

// Colt's solution, which avoids slowiy removing chars from left and removes them in one chunk -> slightly faster
function findLongestSubstring3(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      // if character was already seen move the left pointer to the index of seen char
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // calculates longest each loop
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

module.exports = findLongestSubstring;