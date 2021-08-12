function selectionSort(arr) {
    let index = 0;
    let min = Infinity;
    let minIndex = 0;

    while (index < arr.length) {
        for(let j = index; j < arr.length; j++) {
            let currentMin = Math.min(min, arr[j]);

            if(min !== currentMin) {
                min = currentMin;
                minIndex = j;
            }
        }
        //so we dont swap same indices
        if(index !== minIndex) {
            swap(arr, index, minIndex);  //could also do arr.indexOf(min) for the second arg here, but indexOf has to iterate through array again, and we avoid looking for the index with the above 'if' statement in 'for' loop
        }
        min = Infinity;
        index++;
    }

    return arr;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

console.log(selectionSort([5, 3, 4, 1, 2]));

//Time complexity: O(n^2);
//Selection sort minimized number of swaps


//Teacher solution
/*
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}
*/