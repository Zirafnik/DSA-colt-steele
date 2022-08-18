// Ex. 18
// Recursion

// Time: O(n^4)
// Space: O(n) ?
function flatten(arr) {
    let containsArray = false;
    
    // check if array includes any arrays
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            for(let j = arr[i].length - 1; j >= 0; j--) {
                arr.splice(i + 1, 0, arr[i][j]);
            }

            arr.splice(i, 1);

            containsArray = true;
        }
    }

    if(!containsArray) return arr;

    return flatten(arr);
}

// Colt's solution: shorter, harder to understand
function flatten2(arr){
    const newArr = []
    
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten2(arr[i]));
        }
        else {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
}

// solution from comments: without for... loop
function flatten3(arr){
    if (arr.length === 0) return [];
    
    // it takes the first element and goes down the arrays until it reaches the base number
    // then it concats to a new array containing that single first element, all recursive solutions continuing by removing the element in the deepest array
    return (Array.isArray(arr[0]) ? flatten3(arr[0]) : [arr[0]]).concat(flatten3(arr.splice(1)));
  } 

// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
// console.log(flatten([[[[1], [[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// console.log(flatten2([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten2([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten2([[1],[2],[3]])); // [1,2,3]
// console.log(flatten2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
// console.log(flatten2([[[[1], [[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

console.log(flatten3([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten3([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten3([[1],[2],[3]])); // [1,2,3]
console.log(flatten3([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
console.log(flatten3([[[[1], [[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]