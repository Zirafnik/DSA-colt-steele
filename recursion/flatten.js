//recursion
//Ex. 18

function flatten(arr) {
    let index = 0;
    let newArr = [];

    function helper() {
        console.log(arr);
        if(index === arr.length) {
            newArr = arr;
            return;
        }

        if(Array.isArray(arr[index])) {
            if(arr[index].length === 1) {
                arr[index] = arr[index][0];
            } else if(arr[index].length > 1) {
                let delArr = arr[index].splice(0, 1);
                arr.splice(index, 0, delArr[0]);
            } 
        } else {
            index++;
        }

        helper();
    }
    helper();
    
    return flatten(newArr);
}

//console.log(flatten([1, 2, 3, [4, 5] ]) === [1, 2, 3, 4, 5]);
//console.log(flatten([1, [2, [3, 4], [[5]]]]) === [1, 2, 3, 4, 5]);
//console.log(flatten([[1],[2],[3]]) === [1,2,3]);
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) === [1,2,3]);