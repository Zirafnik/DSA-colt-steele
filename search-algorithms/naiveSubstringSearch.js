// Naive substring search

// Time: O(n^2), (n*m)
// Space: O(1)
function naiveStringSearch(long, short) {
    let count = 0;

    for(let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++) {            
            if(long[i + j] !== short[j]) {
                break;
            } else if(j === short.length -1) {
                count++;
            }
        }
    }

    return count;
}

// Time: O(n)
// Space: O(1)
// This doesn't work for repeating sub-patterns like 'ggg';
function naiveStringSearch2(long, short) {
    let pointerLong = 0;
    let pointerShort = 0;
    let counter = 0;

    while(pointerLong < long.length) {
        // if pointerShort has successfully passed over the string, increment counter + reset it
        if(pointerShort === short.length) {
            counter++;
            pointerShort = 0;
        } 
        // check if value of long mathes value of short, if yes: increment short index by 1
        if(long[pointerLong] === short[pointerShort]) {
            pointerShort++;
        }
        // if it values do not equal, reset short index
        else {
            pointerShort = 0;
        }
        pointerLong++;
    }
}


console.log(naiveStringSearch('wowomgomgwowomg', 'omg')); //3
console.log(naiveStringSearch('aaaaaaa', 'aaaaa')); //3