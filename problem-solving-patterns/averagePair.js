//multiple pointers
//Ex. 5

function averagePair(arr, tarAvg) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let avg = (arr[left] + arr[right]) / 2;

        if(avg === tarAvg) {
            return true;
        }

        if(avg > tarAvg) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}

console.log(averagePair([1,2,3], 2.5)); //true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); //false
console.log(averagePair([], 2.5)); //false
