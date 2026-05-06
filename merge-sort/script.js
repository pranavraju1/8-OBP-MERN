

// this function devides the array into smaller peices
function merSort(arr){
    if(arr.length < 2){
        return arr
    }

    const mid = Math.floor(arr.length / 2);

    let leftArr = arr.slice(0,mid);

    let rightArr = arr.slice(mid);

    return merge( merSort(leftArr), merSort(rightArr))
}

// this function merges the sorted arrat
function merge(leftArr , rightArr){
    const sortedArr = [];

    // check if both the array are emty or not
    while(leftArr.length > 0 && rightArr.length>0){

        if(leftArr[0] <= rightArr[0]){
            // need to remove the 1st element from the left array and push it into sortedArr
            sortedArr.push(leftArr.shift());
        
        }else{
        
            sortedArr.push(rightArr.shift());
        
        }
    }
    // when either array is empty push the elements at the end
    return [...sortedArr, ...leftArr, ...rightArr]
}

let arr = [8, 20, -2, 4, -6];
console.log(merSort(arr))

