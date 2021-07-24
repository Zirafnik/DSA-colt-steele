//multiple pointers
//Ex. 6

function isSubsequence(subStr, str) {
    let check = 0;
    let search = 0;

    while(search < str.length) {
        if(subStr[check] === str[search]) {
            check++;
            search++;
        } else {
            search++;
        }

        if(check === subStr.length) return true;
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false