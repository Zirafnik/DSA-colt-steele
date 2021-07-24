function charCount(str) {
    let result = {};

    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        let regex = /[a-z0-9]/;  //unsure about regex performance

        if(!regex.test(char)) {
            continue;
        }

        if(result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }

    return result;
}

console.log(charCount('How is it?'));
console.log(charCount('Hi how are you today, on 23st?'));

//time complexity = O(n);
//space complexity = O(n);

//could use charCodeAt(0), and compare the char to a range of characters == simple mathematic comparison
