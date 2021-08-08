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


console.log(naiveStringSearch('wowomgomgwowomg', 'omg')); //3
console.log(naiveStringSearch('aaaaaaa', 'aaaaa')); //3