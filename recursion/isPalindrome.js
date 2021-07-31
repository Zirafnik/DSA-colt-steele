//recurstion
//Ex. 16

function isPalindrome(str) {
    if(str[0] !== str[str.length - 1]) {
        return false;
    }

    if(str.length <= 1) {
        return true;
    }

    return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome('awesome')); //false
console.log(isPalindrome('tacocat')); //true