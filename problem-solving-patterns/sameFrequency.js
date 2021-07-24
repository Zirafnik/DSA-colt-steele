//frequency counter
//Ex. 3

function sameFrequency(num1, num2) {
    let freq = {};

    num1 = num1.toString();
    num2 = num2.toString();

    if(num1.length !== num2.length) {
        return false;
    }

    for(let i = 0; i < num1.length; i++) {
        let digit = num1[i];
        freq[digit] ? freq[digit]++ : freq[digit] = 1;
    }

    for(let i = 0; i < num2.length; i++) {
        if(!freq[num2[i]]) {
            return false;
        }

        if(freq[num2[i]] === 0) {
            return false;
        }

        freq[num2[i]]--;
    }

    return true;
}

console.log(sameFrequency(182,281)); //true   
console.log(sameFrequency(34,14)); //false
console.log(sameFrequency(3333, 5555)); // false
console.log(sameFrequency(33, 333)); //false