//recursion
//Ex. 17

function someRecursive(arr, callback) {
    if(arr.length === 0) {
        return false;
    }

    if(callback(arr[arr.length - 1])) {
        return true;
    }

    arr.pop();

    return someRecursive(arr, callback);
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)); //true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false