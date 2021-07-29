//recursion
//Ex. 11

function factorial(int) {
    if(x < 0) return 0;
    if(int <= 1) {
        return 1;
    }
    
    return int * factorial(int - 1);
}

console.log(factorial(7)) //5040