//recursion
//Ex. 14

function fib(n) {
    let prevArr = [1, 1];

    function helperFib(arr) {
        if(n <= 3) {
            return;
        }

        n--;
        let nextNum = arr[0] + arr[1];
        let newArr = [arr[1], nextNum];

        prevArr = newArr;

        return helperFib(newArr);
    }
    helperFib(prevArr);

    return prevArr[0] + prevArr[1];
}

console.log(fib(28)); //317811
console.log(fib(10)); //55


//better solution - pure recursion
function fib2(n) {
    if(n <= 2) return 1;
    
    return fib2(n - 1) + fib2(n - 2);
}

console.log(fib2(28));