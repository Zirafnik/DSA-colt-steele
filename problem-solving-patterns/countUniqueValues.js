//multiple pointers
//Ex. 2

function countUniqueValues(arr){
    let i = 0;
    let j = 1;
    
    if(arr.length === 0) {
        return 0;
    }
    
    while(j < arr.length) {
        if(arr[i] !== arr[j]) {
            let char = arr[j];
            arr.splice(j, 1);
            i++
            arr.splice(i, 0, char);
        }
        j++
    }
    return i + 1;
}