//frequency counter
//Ex. 4

function areThereDuplicates(...args) {
    let uniqueValues = {};

    for(let i = 0; i < args.length; i++) {
        let val = args[i];

        if(uniqueValues[val]) {
            return true;
        }

        uniqueValues[val] = 1;
    }
    
    return false;
}

console.log(areThereDuplicates(1,2,3)); //false
console.log(areThereDuplicates(1,2,2)); //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true